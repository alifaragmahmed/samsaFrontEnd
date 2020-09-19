 
import { Component, OnInit } from '@angular/core';
import { Cache } from 'src/app/shared/cache';
import { Subject } from 'rxjs';
import { HashTable } from 'angular-hashtable';  
import { AcademicYearService } from '../../services/academic-year.service';
import { Helper } from '../../../shared/helper';
import { LevelService } from '../../services/level.service';
import { DivisionService } from '../../services/division.service';
import { TermService } from '../../services/term.service';

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
  public academicYearExpense: any = {
    level_id: 1
  };

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
  public levels: any[];
  public divisions: any[];
  public terms: any[];

  //
  public updateItem: any;

  constructor(private academicService: AcademicYearService) {
    this.self = this;
 
    // init breadcrum
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: Helper.trans('academic_years_expenses')}
    ];
  }

  setLevelsAndDivisions() {
    this.levels = Cache.get(LevelService.LEVEL_PREFIX);
    this.divisions = Cache.get(DivisionService.DIVISION_PREFIX);
    this.terms = Cache.get(TermService.TERPM_PREFIX);
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
      this.loadAcademicYearExpenses();
    }
  }

  loadAcademicYearExpenses() {
    let data = {
      level_id: this.academicYearExpense.level_id
    }; 
    this.academicService.get(data).subscribe( (res: any) => {
      this.academicYearExpense = res; 
    }); 
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
    this.academicService.update(data).subscribe(() => {

    });
  }

  ngOnInit() {
    this.setLevelsAndDivisions();
    this.loadAcademicYearExpenses();
    this.initDatatableOptions();
  }

}
