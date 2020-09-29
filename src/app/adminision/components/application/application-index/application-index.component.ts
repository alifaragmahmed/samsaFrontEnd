import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../../services/application.service';
import { HashTable } from '../../../../../../node_modules/angular-hashtable';
import { AppModule } from '../../../../app.module';
import { Message } from '../../../../shared/message';

@Component({
  selector: 'app-application-index',
  templateUrl: './application-index.component.html',
  styleUrls: ['./application-index.component.scss']
})
export class ApplicationIndexComponent implements OnInit {

  public doc: any = AppModule.doc;

  // Resources list
  public resources: any = {};

  // init breadcrum
  public breadcrumbList = [];
   
  // remove options
  public showRemoveButton = false;
  public showRemoveModal = false;
  public trashList = new HashTable<any, any>();
  public removed = [];

  public pages: any;

  public isEntrollSubmit = false;
  public isLoad = false;
 
 
  constructor(private applicationService: ApplicationService) { 
    // init breadcrum
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: 'applications'}
    ]; 
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

  removeResources() {
    this.showRemoveModal = true;
    const queue = this.trashList.getKeys();
    if (queue.length > 0) {
      const id = queue.pop();
      this.applicationService.destroy(id).subscribe(()=> {
        this.removed.push(id);
        this.trashList.remove(id);
        //
        this.removeResources();
      });
    } else {
      this.removed = [];
      this.showRemoveButton = false;
      this.showRemoveModal = false; 
      this.loadResources();
    }
  }

  prePagniation() {
    if (!this.resources.data)
      return;
    this.resources.prev_page = this.resources.prev_page_url? this.resources.prev_page_url.replace(this.resources.path+'?page=', '') : null;
    this.resources.next_page = this.resources.next_page_url? this.resources.next_page_url.replace(this.resources.path+'?page=', '') : null;
    this.resources.pages = Math.ceil(this.resources.total / this.resources.per_page);
    this.resources.pages_arr = [];
    for(let i = 0; i < this.resources.pages; i ++)
      this.resources.pages_arr.push(i+1);
  }

  enrollStudent(applicationId) {
    this.isEntrollSubmit = true;
    this.applicationService.enroll(applicationId).subscribe((res: any) => {
      if (res.status == 1)  {
        Message.success(res.message);
        this.loadResources(this.resources.current_page);
      } else 
        Message.error(res.message);

      this.isEntrollSubmit = false;
    });
  }



  loadResources(page=1) { 
    this.isLoad = true;
    this.applicationService.get(page).subscribe( (res: any) => {
      this.resources = res; 
      this.prePagniation();
      this.isLoad = false;
    }); 
  }  

  ngOnInit() {
    this.loadResources(); 
  } 


}
