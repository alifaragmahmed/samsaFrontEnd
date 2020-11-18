import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/account/services/level.service';
import { Cache } from 'src/app/shared/cache';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { CourseService } from '../../services/course.service';
import { StudentResultService } from '../../services/student-result.service';

@Component({
  selector: 'app-student-result-index',
  templateUrl: './student-result-index.component.html',
  styleUrls: ['./student-result-index.component.scss']
})
export class StudentResultIndexComponent implements OnInit {

  $: any = $;
  result: any = [];
  levels: any = [];
  courses: any = [];
  response: any = {};
  course_id: any = null;
  level_id: any = null;
  currentPage = 1;
  isLoading = false;
  isSubmitted = false;

  constructor(private studentResultService: StudentResultService, private courseService: CourseService) { }

  ngOnInit() {
    // set select2
    setTimeout(() => {
      this.$('.select2').select2();
    }, 500);
    this.loadLevels();
    this.loadCourses();
    this.loadResult();
  }

  loadLevels() {
    this.levels = Cache.get(LevelService.LEVEL_PREFIX);
  }

  loadCourses() {
    this.courseService.get().subscribe((res) => {
      this.courses = res;
    });
  }

  loadResult() {
    if (!this.$('.course_id').val()) {
      return;
    }
    this.updateResult();

    let data = {
      course_id: this.$('.course_id').val(),
      level_id: this.$('.level_id').val(),
      page: this.currentPage
    };
    this.isLoading = true;
    this.studentResultService.get(data).subscribe((res)=>{
      this.response = res;
      this.result = this.response.data;
      this.prePagniation();
      this.isLoading = false;
    });
  }


  updateResult() {
    if (!this.$('.course_id').val())
      return Message.error(Helper.trans('please select course'));
    let data = {
      result: this.result
    };
    this.isSubmitted = true;
    this.studentResultService.store(data).subscribe((res: any)=>{
      if (res.status == 1)
        Message.success(res.message);
      else
        Message.error(res.messag);

      this.isSubmitted = false;
    });
  }

  loadPage(page) {
    this.currentPage = page;
    this.loadResult();
  }

  prePagniation() {
    if (!this.response.data)
      return;
    this.response.prev_page = this.response.prev_page_url? this.response.prev_page_url.replace(this.response.path+'?page=', '') : null;
    this.response.next_page = this.response.next_page_url? this.response.next_page_url.replace(this.response.path+'?page=', '') : null;
    this.response.pages = Math.ceil(this.response.total / this.response.per_page);
    this.response.pages_arr = [];
    for(let i = 0; i < this.response.pages; i ++)
      this.response.pages_arr.push(i+1);
  }

}
