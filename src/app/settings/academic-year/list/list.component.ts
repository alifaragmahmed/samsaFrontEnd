import { Component, OnInit } from '@angular/core';
import { AcademicYearService } from '../services/academic-year.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IReqAcademicYear } from '../models/IReqAcademicYear';
import { Subject } from 'rxjs';
import { GeneralService } from 'src/app/shared/services/general.service';

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
  public data: IReqAcademicYear = { start_date: '', end_date:'', notes:''};
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];

  constructor(
    private generalService:GeneralService, 
    private service:AcademicYearService,
    private toastr: ToastrService
    ) {
      this.callForm = new FormGroup({
        end_date: new FormControl(null, [
          Validators.required,
        ]),
        start_date: new FormControl(null, [
          Validators.required,
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
  callHttp(){
    this.service.getAll().subscribe((res)=>{
      this.rows = res.data;
    })
  }
  create(){
    this.nameError = '';
    if (this.callForm.invalid) {
      this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
      return;
    }
    this.isSubmitClick = true;
    this.data.start_date = this.dateAndTimeToString(this.callForm.value.start_date);
    this.data.end_date = this.dateAndTimeToString(this.callForm.value.end_date);
    this.data.notes = this.callForm.value.notes;

    console.log(this.data);
    
    this.service.create(this.data).subscribe((res:any)=>{
      if(res.status == 0){
        this.toastr.error(res.message, '');

        console.log(res);
        
        this.errorMessage = res.message.name;
        this.isSubmitClick = false;
        return;
      }else{
        this.errorMessage = '';
        this.isSubmitClick = true;
        this.toastr.success(res.message, '');
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
  dateAndTimeToString(date) {
    if (date !== null && date !== '') {
      if (Date.parse(date.toDateString())) {
        return `${date.getFullYear()}-${('00' + (date.getMonth() + 1))
          .slice(-2)}-${('00' + date.getDate()).slice(-2)} `;
      }
    }
    return '';
  }
  
  delete(id) {
    this.service.delete(id).subscribe(
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
  get start_date() {
    return this.callForm.get('start_date');
  } 
  get end_date() {
    return this.callForm.get('end_date');
  }
  get notes(){
    return this.callForm.get('notes')
  }

}
