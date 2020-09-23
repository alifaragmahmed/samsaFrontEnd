import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Subject } from 'rxjs';
import { CountryService } from '../services/country.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IReqCreateCountry } from '../model/IReqCreateCountry';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public governmentError = '';
  public countryError = '';
  public data: IReqCreateCountry = { name: '' , notes:''};
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];  
  public item = ''
  public id = '';
  public deletedId='';
  constructor(
    private generalService:GeneralService, 
    private service:CountryService , 
    private toastr: ToastrService
    ) {
      this.callForm = new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
        notes:new FormControl()
      });
     }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,   
     
    };
    this.callHttp();
  }
  callHttp(): void {
    this.generalService.getAllCountries().subscribe(
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
      if(res.status ==1){
        this.name.setValue(res.data.name);
        this.notes.setValue(res.data.notes);
        document.getElementById("openModal").click();
        this.item = res.data;
      }

    });
  }
  delete() {
    console.log(this.deletedId);
    
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
  create(){
    this.errorMessage = '';
    if (this.callForm.invalid) {
      this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
      return;
    }
    this.isSubmitClick = true;
    this.data.notes = this.callForm.value.notes;
    this.data.name = this.callForm.value.name;

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

  onSubmit(){
    const itemData: IReqCreateCountry = {
      name: this.callForm.value.name,
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

  get itemData():any{
    return this.service.shareData
  }
  set itemData(value:any){
    this.service.shareData = value
  }
  get name() {
    return this.callForm.get('name');
  }
  get notes() {
    return this.callForm.get('notes');
  }

}
