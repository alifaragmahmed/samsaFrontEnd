import { IService } from './../../../models/iservice';
import { StudentServiceService } from './../../../services/student-service.service';
import { Component, OnInit } from '@angular/core';
import { Cache } from 'src/app/shared/cache';

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.scss']
})
export class ServiceTableComponent implements OnInit {

  // services list
  public serviceList: [] = null;

  constructor(private studentService: StudentServiceService) {

  }

  loadServices() {
    this.studentService.get().subscribe( (res: any) => {
      this.serviceList = res;
      // cache the result
      Cache.set(StudentServiceService.STUDENT_SERVICE_PREFIX, this.serviceList);
    });
  }

  ngOnInit() {
    if (Cache.has(StudentServiceService.STUDENT_SERVICE_PREFIX)) {
      this.serviceList = Cache.get(StudentServiceService.STUDENT_SERVICE_PREFIX);
    } else {
      this.loadServices();
    }
  }

}
