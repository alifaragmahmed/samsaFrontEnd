import { StudentServiceService } from './../../../services/student-service.service';
import { Component, OnInit } from '@angular/core';
import { Cache } from 'src/app/shared/cache';
import { Subject } from 'rxjs';
import { HashTable } from 'angular-hashtable'; 
import { IService } from '../../../models/iservice';
import { AppModule } from '../../../../app.module';

@Component({
  selector: 'app-service-index',
  templateUrl: './service-index.component.html',
  styleUrls: ['./service-index.component.scss']
})
export class ServiceIndexComponent implements OnInit {

  public doc: any = AppModule.doc;

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
  public updateItem: IService = {
    name : '',
    value : 0,
    additional_value : 0,
    installment_percent : 0,
    except_level_id : null,
    division_id : null,
    copy: false,
    repeat: false, 
    from_installment_id : null,
    type : null
  };

  constructor(private studentService: StudentServiceService) {
    this.self = this;
 
    // init breadcrum
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: 'services'}
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
      this.studentService.destroy(id).subscribe(()=> {
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
      
      setTimeout(() => {
        this.doc.datatable();
      }, 3000);
    });
    //}
  }

  viewCreateModal() {
    this.doc.jquery('#createModal').modal('show');  
  }

  showUpdateModal(item) {
    this.updateItem = item;
    this.doc.jquery('#updateModal').modal('show'); 
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
