import { Component, OnDestroy, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { Subject } from 'rxjs';
import { GeneralService } from 'src/app/shared/services/general.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IReqCity } from '../model/IReqCity';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public governmentError = '';
  public countryError = '';
  public rows = [];
  public id = '';
  public deletedId='';
  public paging = {
    page: '1',
    size: '10',
  };
  public countries = [];
  public governments = [];
  public isSubmitClick = false;
  public data: IReqCity = { name: '', government_id:'', country_id:'' };

  constructor(
    private service:CityService,
    private generalService :GeneralService,
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
      government_id: new FormControl(null, [
        Validators.required,
      ]),
    });
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.callHttp();
    this.generalService.getAllCountries().subscribe((res:any)=>{
      this.countries = res.data;
    });
    this.generalService.getAllGovernments().subscribe((res:any)=>{
      this.governments = res.data;
    });
  }
  callHttp(): void {
    this.service.getAll(this.paging).subscribe(
      (res: any) => {
        console.log(res.data);
        
        this.rows = res.data;
        this.dtTrigger.next();
      }
    );
  }
  
  delete() {
    this.service.delete(this.deletedId).subscribe((res) => {      
        if(res.status == 1){
          this.isSubmitClick = false;
          document.getElementById("cancello").click();
          this.toastr.success(res.message, '');
          const index = this.rows.findIndex(v => v.id === this.deletedId);
          this.rows.splice(index, 1);
        }else{
          this.toastr.error(res.message, '');
        }
      });
  }
  onSubmit(){
    this.data.name = this.callForm.value.name;
    this.data.country_id = this.callForm.value.country_id;
    this.data.government_id = this.callForm.value.government_id;

    this.service.update(this.id, this.data).subscribe((res:any)=>{  
      if(res.status == 1){
        document.getElementById("cancell").click();
        
        this.dtTrigger.unsubscribe();
        this.callHttp();
        this.isSubmitClick = false;
        this.toastr.success(res.message, '');

        this.callForm.reset();
      }else{
        this.toastr.error(res.message, '');
      }
    });
  }
  reset(){
    this.callForm.reset();
  }
  getGovernments(country_id){
    this.generalService.getCountryGovernments(country_id.value).subscribe((res:any)=>{
      console.log(res);
      
      this.governments = res.data;      
    });
    
  }
  create(){

    this.nameError = '';
    if (this.callForm.invalid) {
      this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
      return;
    }
    this.callForm.reset();

    this.isSubmitClick = true;
    this.data.name = this.callForm.value.name;
    this.data.country_id = this.callForm.value.country_id;
    this.data.government_id = this.callForm.value.government_id;

    this.service.create(this.data).subscribe((res:any)=>{
      console.log(res);
      
      if(res.status == 0){
        this.errorMessage = res.message;
        this.isSubmitClick = false;
      }else{
        this.errorMessage = '';
        this.isSubmitClick = true;
        this.toastr.success(res.messgae, '');
        this.dtTrigger.unsubscribe();

        this.callHttp();
        
      }
      
      (e) => {
        this.isSubmitClick = false;
        if (e.status == 400) {
          this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
          for (let i = 0; i < e.error.errors.length; i++) {
            if (e.error.errors[i].input === 'name') {
              this.nameError = e.error.errors[i].message;
            }
          }
        }
      };
    })
  }
  getItemData(id){
    this.id = id;
    this.service.getItemById(id).subscribe((res:any)=>{
      if(res.status ==1){
       document.getElementById("openModal").click();
        this.name.setValue(res.data.name);
        this.country_id.setValue(res.data.government.country.id);
        this.government_id.setValue(res.data.government_id);
        // this.item = res.data;
      }

    });
  }
  launchModal(id){
    this.deletedId = id;
  }
  get name() {
    return this.callForm.get('name');
  }
  get government_id() {
    return this.callForm.get('government_id');
  }
  get country_id() {
    return this.callForm.get('country_id');
  }
}
