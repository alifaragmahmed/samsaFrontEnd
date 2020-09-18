import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GovernmentService } from '../services/government.service';
import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';
import { IReqItem } from '../models/IReqItem';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-create-government',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public governmentError = '';
  public countryError = '';
  public rows = [];
  public data: IReqItem = { name: '' , country_id:''};
  public isSubmitClick = false;
  mySubscription: any;

  constructor(
    private service: GovernmentService,
    private router: Router,
    private toastr: ToastrService,
    private generalService:GeneralService
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
    });
   }

  ngOnInit() {
    this.generalService.getAllCountries().subscribe((res:any)=>{
      this.rows = res.data;
    });
  
  }
  create(){
    this.nameError = '';
    if (this.callForm.invalid) {
      this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
      return;
    }
    this.isSubmitClick = true;
    this.data.name = this.callForm.value.name;
    this.data.country_id = this.callForm.value.country_id;

    this.service.create(this.data).subscribe((res:any)=>{
      console.log(res);
      
      if(res.status == 0){
        this.errorMessage = res.message;
        this.isSubmitClick = false;
        this.toastr.error(res.message, '');

      }else{
        this.toastr.success(res.message, '');
        this.errorMessage = '';
        this.isSubmitClick = true;
       
      }(e) => {
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

  get name() {
    return this.callForm.get('name');
  }
  get country_id() {
    return this.callForm.get('country_id');
  }
}
