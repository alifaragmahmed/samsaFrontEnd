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

  $: any = $;
  doc: any = document;
  isSubmitted = false;
  availableCourses = new HashTable();
  registerCourses = new HashTable();
  academicSetting = new HashTable<any, any>();
  courses: any = [];
  student: any = {};
  searchData: any = {};
  levels: any = [];
  requiredHours: number = 0;
  moreHours: number = 0;

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
    this.getMoreHours();
    this.loadRegisterCourses();
  }

  calculateRequiredHours() {
    let hours = 0;
    if (this.academicSetting.getKeys().length <=0 )
      return;
    if (this.student.gpa != 0 && this.student.gpa < this.academicSetting.get(2).value) {
      this.requiredHours = this.academicSetting.get(3).value;
    } else {
      this.requiredHours = this.academicSetting.get(4).value;
    }
  }

  getMoreHours() {
    if (this.student.register_hours >= this.academicSetting.get(9).value)
      this.moreHours = this.academicSetting.get(10).value;
  }

  getAllAvailableHours() {
    return (parseFloat(this.requiredHours+"") + parseFloat(this.moreHours+""));
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
    if (this.getRegisterHours() >= this.getAllAvailableHours()) {
      Message.error("لا يمكنك تسجيل اكثرمن " +this.getAllAvailableHours());
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

  removeCourse(course) {
    let self = this;
    Message.confirm(Helper.trans('are you sure'), ()=>{
      if (self.registerCourses.has(course.id))
        self.registerCourses.remove(course.id);
    });
  }

  updateRegisterCourses() {
    let data = {
      courses: this.registerCourses.getAll(),
      student_id: this.student.id
    };
    this.isSubmitted = true;
    this.courseService.updateRegisterCourses(data).subscribe((res: any)=>{
      if (res.status == 1) {
        Message.success(res.message);
        this.selectStudent(this.student);
      }
      else
        Message.error(res.message);

      this.isSubmitted = false;
    });
  }

  loadRegisterCourses() {
    if (this.student.current_register_courses)
    this.student.current_register_courses.forEach(element => {
      this.registerCourses.put(element.id, element);
    });
  }

  print() {
    Helper.print();
  }

  exportExcel() {
    const filename = Helper.trans("student register document") + "-" + new Date().toLocaleTimeString();
    this.doc.exportExcel(filename);
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
    }
    this.studentSearchDialogShow = false;
  }

  loadStudentInfo(id) {
    this.academicSettingService.getStudentInfo(id).subscribe((res: any) => {
      this.student = res;
      this.loadData();
    });
  }
}
