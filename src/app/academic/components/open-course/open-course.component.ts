import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/account/services/level.service';
import { Cache } from 'src/app/shared/cache';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-open-course',
  templateUrl: './open-course.component.html',
  styleUrls: ['./open-course.component.scss']
})
export class OpenCourseComponent implements OnInit {

  courses: any = [];
  openCourses: any = [];
  levels: any = [];
  selectedLevels: any = [];
  isSubmitted = false;


  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.get().subscribe((res)=> {
      this.courses = res;
      this.loadLevels();
      this.loadOpenCourses();
    });
  }

  selectCourse(course) {
    this.courses.forEach(element => {
      if (course.id == element.id)
        element.selected = 1;
    });
  }

  loadOpenCourses() {
    this.courseService.getOpenCourses().subscribe((res)=> {
      this.openCourses = res;
      //
      this.openCourses.forEach(element => {
        this.selectCourse(element);
      });
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

  updateOpenCourses() {
    let arr = [];
    this.courses.forEach(element => {
      if (element.selected)
        arr.push(element);
    });

    let data ={
      courses: arr
    };

    this.isSubmitted= true;
    this.courseService.updateOpenCourses(data).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message);
      }
      else
        Message.error(res.message);
      this.isSubmitted = false;
    });
  }



}
