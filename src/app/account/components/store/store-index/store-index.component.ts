import { Component, OnInit } from '@angular/core';
import { HashTable } from '../../../../../../node_modules/angular-hashtable';  
import { AppModule } from '../../../../app.module';
import { Router } from '../../../../../../node_modules/@angular/router';
import { Helper } from '../../../../shared/helper';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-store-index',
  templateUrl: './store-index.component.html',
  styleUrls: ['./store-index.component.scss']
})
export class StoreIndexComponent implements OnInit {

  public doc: any = AppModule.doc;

  // Resources list
  public resources: any[] = null;

  // init breadcrum
  public breadcrumbList = [];
   
  // remove options
  public showRemoveButton = false;
  public showRemoveModal = false;
  public trashList = new HashTable<any, any>();
  public removed = [];

  // update 
  public updateItem: any = {};
  public updateResources: any;
 
  constructor(private storeService: StoreService, private router: Router) { 
    // init breadcrum
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: 'required_documents'}
    ];

    this.updateResources = () => { 
      Helper.refreshComponent(this.router, '/adminision/settings/required_documents');  
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

  removeResources() {
    this.showRemoveModal = true;
    const queue = this.trashList.getKeys();
    if (queue.length > 0) {
      const id = queue.pop();
      this.storeService.destroy(id).subscribe(()=> {
        this.removed.push(id);
        this.trashList.remove(id);
        //
        this.removeResources();
      });
    } else {
      this.removed = [];
      this.showRemoveButton = false;
      this.showRemoveModal = false;
      // 
      this.updateResources();
    }
  }

  loadResources() { 
    this.storeService.get().subscribe( (res: any) => {
      this.resources = res; 
      // 
      setTimeout(() => {
        this.doc.datatable();
      }, 2000);
    }); 
  } 

  setUpdateResource(item) {
    this.updateItem = item;
    this.doc.jquery('#updateModal').modal('show');
  } 
  
 
 

  ngOnInit() {
    this.loadResources(); 
  }
  
  showUpdateModal(item) {
    this.updateItem = item;
  }

}
