import { StudentAccountService } from './../../../services/student-account.service';
import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../models/payment';
import { Message } from '../../../../shared/message';
import { Auth } from '../../../../shared/auth';
import { Helper } from '../../../../shared/helper';
import { AppModule } from '../../../../app.module';
import { SafeMsgBuilder } from '../../../helpers/safe-msg-builder';

@Component({
  selector: 'app-safe-index',
  templateUrl: './safe-index.component.html',
  styleUrls: ['./safe-index.component.scss']
})
export class SafeIndexComponent implements OnInit {

  // init document 
  public doc: any = AppModule.doc;

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
    this.safeObject.case_constraint = {};
    this.safeObject.constraint_status = {};
    this.safeObject.paid_value = 0;
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
      this.buildSafeMsg();
    
      if (!this.safeObject.image)
        this.safeObject.image = '/assets/img/avatar.png';
      this.loadAvailableServices();
    });
  }

  updateStudent() { 
    if (this.safeObject)
      if (this.safeObject.id)
        this.loadStudentAccountInfo(this.safeObject.id);
  }

  /**
   * perform payment
   */
  performPay() {
    Message.confirm(Helper.trans('are_you_sure'), ()=>{
      this.payment = new Payment(this.safeObject.id, this.safeObject.paid_value, this.studentAcountService, ()=>{
        this.updateStudent();
      });
      return this.payment.pay();
    });
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

  buildSafeMsg() {
    let builder = new SafeMsgBuilder();
    builder
      .setGender(this.safeObject.gender)
      .setName(this.safeObject.name)
      .setCode(this.safeObject.code)
      .setLevel(this.safeObject.level? this.safeObject.level.name : '')
      .setDivision(this.safeObject.division? this.safeObject.division.name : '')
      .setOldBalance(this.safeObject.old_balance)
      .setCurrentBalance(this.safeObject.current_balance)
      .setPaidValue(this.safeObject.paid_value)
      .say();
  }

  ngOnInit() {
  }

}
