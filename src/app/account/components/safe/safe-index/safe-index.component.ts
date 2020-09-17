import { StudentAccountService } from './../../../services/student-account.service';
import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../models/payment';
import { Message } from '../../../../shared/message';

@Component({
  selector: 'app-safe-index',
  templateUrl: './safe-index.component.html',
  styleUrls: ['./safe-index.component.scss']
})
export class SafeIndexComponent implements OnInit {

  public safeObject: any = {};
  public payment: Payment;
  public searchKey: string;
  public studentSearchId;
  public availableServices: any;

  public studentSearchDialogShow = false;
  public studentSearchDialogLoader = false;
  public showStudentInstallment = false;
  public isWait = false;
  public timeoutId;
  public students: any = []; 

  constructor(private studentAcountService: StudentAccountService) {
    this.initSafeObject();
    // 
  }

  initSafeObject() {
    // set default image
    this.safeObject.image = '/assets/img/avatar.png';
    this.safeObject.notes = 'some notes here';
    this.safeObject.level = {};
    this.safeObject.division = {};
  }

  searchInputEvent() {
    if (!this.searchKey)
      return;

    this.students = [];
    this.studentSearchDialogLoader = true;
    this.isWait = true;
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
       this.searchAboutStudent();
    }, 500);
  }

  searchAboutStudent() {
    this.studentAcountService.search(this.searchKey).subscribe((r) => {
        this.studentSearchDialogLoader = false;
        this.students = r;
        if (this.students.length > 0) {
          this.studentSearchDialogShow = true;
        }
    });
  }

  selectStudent(student) {
    this.studentSearchDialogShow = false;
    this.searchKey = student.name;
    this.studentSearchId = student.id;
    //
    this.loadStudentAccountInfo(student.id);
  }

  loadStudentAccountInfo(id) {
    if (!id)
      return Message.error('search about student first');
    this.studentAcountService.getStudentAccount(id).subscribe((r) => {
      this.safeObject = r;
    
      if (!this.safeObject.image)
        this.safeObject.image = '/assets/img/avatar.png';
      this.loadAvailableServices();
    });
  }

  updateStudent() { 
    if (this.studentSearchId)
      this.loadStudentAccountInfo(this.studentSearchId);
  }

  /**
   * perform payment
   */
  performPay() {
    this.payment = new Payment(this.safeObject.id, this.safeObject.paid_value, this.studentAcountService, ()=>{
      this.updateStudent();
    });
    return this.payment.pay();
  } 

  /**
   *  load available services for student
   */
  loadAvailableServices() {
    if(this.safeObject.id) {
      this.studentAcountService.getAvailabeServices(this.safeObject.id).subscribe((r) => {
        this.availableServices = r; 
      });
    }
  }
  ngOnInit() {
  }

}
