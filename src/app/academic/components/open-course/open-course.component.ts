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


  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.loadCourses();
    this.loadOpenCourses();
  }

  loadCourses() {
    this.courseService.get().subscribe((res)=> {
      this.courses = res;
      this.loadLevels();
    });
  }

  loadOpenCourses() {
    this.courseService.getOpenCourses().subscribe((res)=> {
      this.openCourses = res;
      this.loadSelectedLevels();
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

  loadSelectedLevels() {
    this.selectedLevels = Cache.get(LevelService.LEVEL_PREFIX);
    this.selectedLevels.forEach(element => {
      // assign courses to levels
      element.courses = [];
      this.openCourses.forEach(course => {
        if (course.level_id == element.id) {
          element.courses.push(course);
        }
      });
    });
  }

  addCourse(course, index) {
    this.openCourses.push(course);
    //
    this.courses.splice(index, index+1);
    //
    this.loadLevels();
    this.loadSelectedLevels();
  }

  removeCourse(course, index) {
    this.courses.push(course);
    //
    this.openCourses.splice(index, index+1);
    //
    this.loadLevels();
    this.loadSelectedLevels();
  }

}
