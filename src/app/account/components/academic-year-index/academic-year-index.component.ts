 
import { Component, OnInit } from '@angular/core';
import { Cache } from 'src/app/shared/cache';
import { Subject } from 'rxjs';
import { HashTable } from 'angular-hashtable';  
import { AcademicYearService } from '../../services/academic-year.service';
import { Helper } from '../../../shared/helper';

@Component({
  selector: 'app-academic-year-index',
  templateUrl: './academic-year-index.component.html',
  styleUrls: ['./academic-year-index.component.scss']
})
export class AcademicYearIndexComponent implements OnInit {

  // datatable options
  public dtOptions: any;

  // datable trigger
  dtTrigger: Subject<any> = new Subject();

  // services list
  public serviceList: any[] = null;

  // init breadcrum
  public breadcrumbList = [];

  public self: any;

  // show create modal
  public showCreateModal = false;

  // remove options
  public showRemoveButton = false;
  public showRemoveModal = false;
  public trashList = new HashTable<any, any>();
  public removed = [];

  //
  public updateItem: any;

  constructor(private academicService: AcademicYearService) {
    this.self = this;
 
    // init breadcrum
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: Helper.trans('academic_years')}
    ];
  }

  initDatatableOptions() { 
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10 
    };
  }

  toggleFromTrash(id) {
    if (this.trashList.has(id)) {
      this.trashList.remove(id);
    }
    else {
      this.trashList.put(id, id);
    }
 
    if (this.trashList.size() > 0) 
      this.showRemoveButton = true;
    else
      this.showRemoveButton = false;
  }

  removeServices() {
    this.showRemoveModal = true;
    const queue = this.trashList.getKeys();
    if (queue.length > 0) {
      const id = queue.pop();
      this.academicService.destroy(id).subscribe(()=> {
        this.removed.push(id);
        this.trashList.remove(id);
        //
        this.removeServices();
      });
    } else {
      this.removed = [];
      this.showRemoveButton = false;
      this.showRemoveModal = false;
      //
      this.dtTrigger.unsubscribe();   
      this.loadServices();
    }
  }

  loadServices() {
    //alert(Cache.has(StudentServiceService.STUDENT_SERVICE_PREFIX));
    //if (Cache.has(StudentServiceService.STUDENT_SERVICE_PREFIX)) {
    //  this.serviceList = Cache.get(StudentServiceService.STUDENT_SERVICE_PREFIX);
    //} else { 
    this.studentService.get().subscribe( (res: any) => {
      this.serviceList = res;
      // cache the result
      Cache.set(StudentServiceService.STUDENT_SERVICE_PREFIX, this.serviceList);
      this.dtTrigger.next();
    });
    //}
  }

  viewCreateModal() {
    document.getElementById('createModal').style.display='block';
  }

  showUpdateModal(item) {
    this.updateItem = item;
    document.getElementById('updateModal').style.display='block';
  }

  updateService() {
    let data: any = this.updateItem;
    this.studentService.update(data).subscribe(() => {

    });
  }

  ngOnInit() {
    this.loadServices();
    this.initDatatableOptions();
  }

}
