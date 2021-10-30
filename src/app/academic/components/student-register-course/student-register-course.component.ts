import { Component, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { LevelService } from 'src/app/account/services/level.service';
import { StudentAccountService } from 'src/app/account/services/student-account.service';
import { Auth } from 'src/app/shared/auth';
import { Cache } from 'src/app/shared/cache';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { environment } from 'src/environments/environment';
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
  sortType: number = 0;
  cantRegisterReason = "";

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
    let self = this;
    setTimeout(() => {
      this.$('.select2').select2();
      this.$('.sort-select').change(() => {
        self.sortTable();
      });
    }, 500);

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
      //
      this.sortTable();
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
    this.alertOneStudentStage(this.student);
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
      if (!course.is_not_credit_hour)
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
    if (!course.is_not_credit_hour) {
      if (!this.validate())
        return;
    }

    this.registerCourses.put(course.id, course);
  }

  removeCourse(course) {
    let self = this;
    Message.confirm(Helper.trans('are you sure'), ()=>{
      if (self.registerCourses.has(course.id))
        self.registerCourses.remove(course.id);
    });
  }

  performUpdateRegisterCourses() {
    if (this.getRegisterHours() < this.requiredHours) {
      var self = this;
      Message.confirm(Helper.trans('student register hours less than ') + this.requiredHours, () => {
        self.updateRegisterCourses();
      });
    } else {
      this.updateRegisterCourses()
    }
  }

  updateRegisterCourses() {
    if (!this.student.id)
      return Message.error(Helper.trans('select student first'));
    let data = {
      courses: this.registerCourses.getAll(),
      student_id: this.student.id
    };
    this.isSubmitted = true;
    this.courseService.updateRegisterCourses(data).subscribe((res: any)=>{
      if (res.status == 1) {
        Message.success(res.message);
        this.printRegisterCourses();
        this.selectStudent(this.student);
      }
      else
        Message.error(res.message);

      this.isSubmitted = false;
    });
  }

  loadRegisterCourses() {
    this.registerCourses = new HashTable();
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

  printRegisterCourses() {
    let url1 = environment.publicUrl + "/academic/register-course-student-print/" + this.student.id+"?api_token="+Auth.getApiToken();
    let url2 = environment.publicUrl + "/academic/register-course-user-print/" + this.student.id+"?api_token="+Auth.getApiToken();
    Helper.openWindow(url1);
    Helper.openWindow(url2);
  }

  sortTable() {
    let sorts = this.$('.sort-select').val();
    console.log(sorts);
    let courses = this.courses;

    sorts.reverse().forEach(element => {
      if (element == 1) {
        courses = this.sortWithPrerequsites(courses);
      } else if (element == 2) {
        courses = this.sortWithRegisterTimes(courses);
      }
    });

    this.courses = courses;
    this.loadLevels();
  }

  /**
   * sort with prerequsites
   */
  sortWithPrerequsites(array) {
    let courses = [];
    let prerequistes = [];
    array.forEach(element => {
        element.sorted = false;
        prerequistes.push(element.prerequsite_length);
    });

    prerequistes.sort().reverse().forEach(element => {
    array.forEach(course => {
        if (course.prerequsite_length == element) {
          if (!course.sorted)
            courses.push(course);
          course.sorted = true;
        }
      });
    });

    return courses;
  }

  /**
   * sort with times of registers
   *
   */
  sortWithRegisterTimes(array) {
    let courses = [];
    let times = [];
    array.forEach(element => {
        element.sorted = false;
        times.push(element.times);
    });

    times.sort().reverse().forEach(element => {
      array.forEach(course => {
        if (course.times == element) {
          if (!course.sorted)
            courses.push(course);
          course.sorted = true;
        }
      });
    });

    return courses;
  }

  /**
   * check if the student can register
   *
   */
  canRegister() {
    let valid = true;

    if (this.student.case_constraint_id == 1) {
      valid = false;
      this.cantRegisterReason = Helper.trans('can register for application students');
    } else {
      this.cantRegisterReason = "";
    }

    return valid;
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

  alertOneStudentStage(student: any) {
    if (student.stage > 0) {
      var message = Helper.trans('student in stage number') + " : " + student.stage;
      Message.warning(message, student.name);
    }
  }
}
