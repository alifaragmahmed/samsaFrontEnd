import { StudentServiceService } from './../../../services/student-service.service';
import { Component, OnInit } from '@angular/core';
import { Cache } from 'src/app/shared/cache';

@Component({
  selector: 'app-service-index',
  templateUrl: './service-index.component.html',
  styleUrls: ['./service-index.component.scss']
})
export class ServiceIndexComponent implements OnInit {


  // services list
  public serviceList: [] = null;

  // init breadcrum
  public breadcrumbList = [];

  public self: any;

  constructor(private studentService: StudentServiceService) {
    this.self = this;

    // init breadcrum
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: 'services'}
    ];
  }

  loadServices() {
    this.studentService.get().subscribe( (res: any) => {
      this.serviceList = res;
      // cache the result
      Cache.set(StudentServiceService.STUDENT_SERVICE_PREFIX, this.serviceList);
    });
  }

  ngOnInit() {
    //alert(Cache.has(StudentServiceService.STUDENT_SERVICE_PREFIX));
    if (Cache.has(StudentServiceService.STUDENT_SERVICE_PREFIX)) {
      this.serviceList = Cache.get(StudentServiceService.STUDENT_SERVICE_PREFIX);
    } else {
      this.loadServices();
    }

  }

}
