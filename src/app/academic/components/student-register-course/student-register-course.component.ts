import { Component, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { LevelService } from 'src/app/account/services/level.service';
import { StudentAccountService } from 'src/app/account/services/student-account.service';
import { Cache } from 'src/app/shared/cache';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { AcademicSettingService } from '../../services/academic-setting.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-student-register-course',
  templateUrl: './student-register-course.component.html',
  styleUrls: ['./student-register-course.component.scss']
})
export class StudentRegisterCourseComponent implements OnInit {

  isSubmitted = false;
  availableCourses = new HashTable();
  registerCourses = new HashTable();
  academicSetting = new HashTable<any, any>();
  courses: any = [];
  student: any = {};
  searchData: any = {};
  levels: any = [];
  requiredHours = 0;

  //
  public searchKey: string;
  public studentSearchDialogShow = false;
  public studentSearchDialogLoader = false;
  public isWait = false;
  public timeoutId;
  public students: any = [];

  constructor(
    private courseService: CourseService,
    private studentAcountService: StudentAccountService,
    private academicSettingService: AcademicSettingService) {
      this.student = {
        image: '/assets/img/avatar.png'
      };
  }

  ngOnInit() {
    this.loadAcademicSetting();
  }

  /**
   * convert arr to hashtable
   *
   * @param arr  Array
   * @param hashtable HashTable
   */
  toHashTable(arr, hashtable: any) {
    hashtable = new HashTable<any, any>();
    arr.forEach(element => {
      hashtable.put(element.id, element);
    });
  }

  loadAvailableCourses() {
    let data = {
      student_id: this.searchData.student_id
    };
    this.courseService.getAvailableCourses(data).subscribe((res)=>{
      this.toHashTable(res, this.availableCourses);
      this.courses = res;
      //
      this.loadLevels();
      //
      this.calculateRequiredHours();
    });
  }

  loadAcademicSetting() {
    this.academicSettingService.get().subscribe((res: any)=>{
      //this.toHashTable(res, this.academicSetting);

      res.forEach(element => {
        this.academicSetting.put(element.id, element);
      });
      console.log(this.academicSetting);
    });
  }

  loadLevels() {
    this.levels = Cache.get(LevelService.LEVEL_PREFIX);
    this.levels.forEach(element => {
      // assign courses to levels
      element.courses = [];
      this.courses.forEach(course => {
        if (course.level_id == element.id) {
          element.courses.push(course);
        }
      });
    });
  }

  loadData() {
    this.loadAvailableCourses();
  }

  calculateRequiredHours() {
    let hours = 0;
    if (this.student.gpa != 0 && this.student.gpa < this.academicSetting.get(2).value) {
      this.requiredHours = this.academicSetting.get(3).value;
    } else {
      this.requiredHours = this.academicSetting.get(4).value;
    }
  }

  getRegisterHours() {
    let hours = 0;
    this.registerCourses.getAll().forEach(element => {
      let course: any = element;
      hours += course.credit_hour;
    });
    return hours;
  }

  validate() {
    let valid = true;
    if (this.getRegisterHours() > this.requiredHours) {
      Message.error("لا يمكنك تسجيل اكثرمن " +this.requiredHours);
      return false;
    }

    return true;
  }

  addCourse(course) {
    if (this.registerCourses.has(course.id)) {
      return Message.error("المقرر مسجل بالفعل");
    }

    if (!this.validate())
      return;

    this.registerCourses.put(course.id, course);
  }


  //***********************************************
  //*** student search methods
  //***********************************************
  //
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
    if (student) {
      this.searchData.student_id = student.id;
      this.searchKey = student.name;
      this.loadStudentInfo(student.id);
      this.loadData();
    }
    this.studentSearchDialogShow = false;
  }

  loadStudentInfo(id) {
    this.studentAcountService.getStudentAccount(id).subscribe((res: any) => {
      this.student = res;
    });
  }
}
