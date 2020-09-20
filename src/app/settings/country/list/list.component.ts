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
  public data: IReqCreateCountry = { name: '' };
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  public item;
  constructor(
    private generalService:GeneralService, 
    private countryService:CountryService , 
    private toastr: ToastrService
    ) {
      this.callForm = new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
      });
     }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      // dom: 'Bfrtip',
      // // Configure the buttons
      // buttons: [
      //   'columnsToggle',
      //   'colvis',
      //   'copy',
      //   'print',
      //   'excel',
      //   {
      //     text: 'Some button',
      //     key: '1',
      //     action: function (e, dt, node, config) {
      //       alert('Button activated');
      //     }
      //   }
      // ]      
     
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
  findItem(id){
    this.countryService.getItemById(id).subscribe((res:any) => {
      if(res.status == 1){
        // this.name.setValue(res.data.name);
        this.itemData(res.data.name)
      }else{
        this.toastr.error(res.message);
      }
    });
  }
  delete(id) {
    this.countryService.deleteCountryById(id).subscribe(
      (res) => {
        console.log(res);
        if(res.status == 1){
          this.toastr.success(res.message, '');
          const index = this.rows.findIndex(v => v.id === id);
          this.rows.splice(index, 1);
        }else{
          this.toastr.error(res.message, '');

        }
       
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
    this.countryService.createCountry(this.data).subscribe((res:any)=>{
      if(res.status == 0){
        this.errorMessage = res.message.name;
        this.isSubmitClick = false;
        return;
      }else{
        this.errorMessage = '';
        this.isSubmitClick = true;
        this.toastr.success('تم انشاء البيانات بنجاح', '');
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
  get itemData():any{
    return this.countryService.shareData
  }
  set itemData(value:any){
    this.countryService.shareData = value
  }
  get name() {
    return this.callForm.get('name');
  }

}
