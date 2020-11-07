import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApplicationSettingService } from 'src/app/adminision/services/application-setting.service';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss']
})
export class CreateCourseFormComponent implements OnInit, OnChanges {

  @Input() course: any = {};
  @Input() updateView: any;
  @Input() categories: any;

  $: any = $;

  courses: any = [];
  divisions: any = [];
  isSubmitted = false;
  requiredFields = [
    'name',
    'code',
    'year_work_degree',
    'practical_degree',
    'academic_degree',
    'small_degree',
    'large_degree',
    'division_id',
    'credit_hour',
    'subject_category_id',
    'book_price',
    'failed_degree'
  ];

  constructor(private courseService: CourseService, private applicationSetting: ApplicationSettingService) { }

  ngOnInit() {
    setTimeout(() => {
      this.$('.select2').select2();
    }, 1500);
    this.loadCourses();
    this.applicationSetting.getDivisions().subscribe((res) => {
      this.divisions = res;
    });
  }

  ngOnChanges() {
    setTimeout(() => {
      this.$('.select2').select2();
    }, 500);
  }

  loadCourses() {
    this.courseService.get().subscribe((res) => {
      this.courses = res;
    });
  }


  validate() {
    let valid = true;
    this.requiredFields.forEach(element => {
      if (!this.course[element])
        valid = false;
    });
    return valid;
  }

  send() {
    if (!this.validate()) {
      return Message.error(Helper.trans('fill all required data'));
    }
    this.course.prerequsites = this.$('.prerequsited').val();

    if (this.course.id) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    this.isSubmitted= true;
    this.courseService.store(this.course).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message);
      }
      else {
        Message.error(res.message);
      }
      this.isSubmitted = false;
      this.updateView();
      this.loadCourses();
    });
  }

  update() {
    this.isSubmitted= true;
    this.courseService.update(this.course).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message);
      }
      else {
        Message.error(res.message);
      }
      this.isSubmitted = false;
      this.updateView();
      this.loadCourses();
    });
  }


}
