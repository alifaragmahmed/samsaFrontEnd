import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Subject } from 'rxjs';
import { GovernmentService } from '../services/government.service';
import { ToastrService } from 'ngx-toastr';
import { IReqItem } from '../models/IReqItem';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dtElement: DataTableDirective;
  isDtInitialized:boolean = false;
  public data: IReqItem = { name: '' , country_id:'', notes:''};
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public governmentError = '';
  public countryError = '';
  public isSubmitClick = false;
  public item = ''
  public id = '';
  public deletedId='';

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  public countries = [];
  public sucreq = false;

  public query = {
    page: '1',
    size: '10',
  };
  constructor(
    private generalService:GeneralService, 
    private service: GovernmentService,
    private toastr: ToastrService
  ) {
    this.callForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      country_id: new FormControl(null, [
        Validators.required,
      ]),
      notes:new FormControl()
    });
   }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10 
    };
    this.generalService.getAllCountries().subscribe((res:any)=>{
      this.countries = res.data;
    });
    this.callHttp();
  }
  
  callHttp(): void {
    this.service.getAll(this.query).subscribe(
      (res: any) => {
        console.log(res);
        
        this.rows = res.data;
        this.dtTrigger.next();
      }
    );
  }
  getItemData(id){
    this.id = id;
    this.service.getItemById(id).subscribe((res:any)=>{
      console.log(res);
      
      if(res.status ==1){
        this.name.setValue(res.data.name);
        this.notes.setValue(res.data.notes);
        this.country_id.setValue(res.data.country_id);
        document.getElementById("openModal").click();
        this.item = res.data;
      }

    });
  }
  onSubmit(){
    const itemData: IReqItem = {
      name: this.callForm.value.name,
      country_id:this.callForm.value.country_id,
      notes : this.callForm.value.notes
    };
    this.service.update(this.id, itemData).subscribe((res:any)=>{  
      if(res.status == 1){
        document.getElementById("cancell").click();
        this.callHttp();
        this.isSubmitClick = false;
        this.item = '';
        this.toastr.success(res.message, '')
        this.dtTrigger.unsubscribe();
      }else{
        this.toastr.error(res.message, '');
      }
    });
  }
  create(){
    this.errorMessage = '';
    if (this.callForm.invalid) {
      this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
      return;
    }
    this.isSubmitClick = true;
    this.data.name = this.callForm.value.name;
    this.data.country_id = this.callForm.value.country_id;

    this.service.create(this.data).subscribe((res:any)=>{            
      if(res.status == 0){
        if(res.message.name)
        this.toastr.error(res.message, '');
        this.errorMessage = res.message;
        this.isSubmitClick = false;

      }else{
        this.errorMessage = '';
        this.isSubmitClick = false;
        this.toastr.success(res.message, '');
        this.dtTrigger.unsubscribe();
        document.getElementById("cancel").click();
        this.callHttp();
      }
    })
  }

  delete() {
    this.service.delete(this.deletedId).subscribe((res) => {      
        if(res.status == 1){
          document.getElementById("cancello").click();
          this.toastr.success(res.message, '');
          const index = this.rows.findIndex(v => v.id === this.deletedId);
          this.rows.splice(index, 1);
        }else{
          this.toastr.error(res.message, '');
        }
       
      });
  }
  launchModal(id){
    // console.log(id);
    this.deletedId = id;
    
  }


  get name() {
    return this.callForm.get('name');
  }
  get country_id() {
    return this.callForm.get('country_id');
  }
  get notes() {
    return this.callForm.get('notes');
  }

}
