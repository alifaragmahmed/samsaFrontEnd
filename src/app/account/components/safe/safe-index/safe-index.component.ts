import { StudentAccountService } from './../../../services/student-account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-index',
  templateUrl: './safe-index.component.html',
  styleUrls: ['./safe-index.component.scss']
})
export class SafeIndexComponent implements OnInit {

  public safeObject: any = {};
  public searchKey: string;
  public studentSearchId;

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
    this.studentAcountService.getStudentAccount(id).subscribe((r) => {
      this.safeObject = r;
      console.log(this.safeObject);
    });
  }

  updateStudent() { 
    this.loadStudentAccountInfo(this.studentSearchId);
  }

  ngOnInit() {
  }

}
