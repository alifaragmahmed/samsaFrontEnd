import { Component, OnInit } from '@angular/core'; 
import { HashTable } from '../../../../../../node_modules/angular-hashtable';
import { AppModule } from '../../../../app.module';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.scss']
})
export class StudentIndexComponent implements OnInit {

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
 
 
  constructor(private studentService: StudentService) { 
    // init breadcrum
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: 'students'}
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
      this.studentService.destroy(id).subscribe(()=> {
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



  loadResources(page=1) { 
    this.studentService.get(page).subscribe( (res: any) => {
      this.resources = res; 
      this.prePagniation();
    }); 
  }  

  ngOnInit() {
    this.loadResources(); 
  } 


}