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
  public item = ''
  public id = '';
  public deletedId='';

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
        mame:new FormControl(),
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
      this.isSubmitClick = false;

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

  getItemData(id){
    this.id = id;
    this.service.getItemById(id).subscribe((res:any)=>{
      if(res.status ==1){
        console.log(res.data);
        document.getElementById("openModal").click();
        this.notes.setValue(res.data.notes);
        this.end_date.setValue(res.data.end_date);
        this.start_date.setValue(res.data.start_date);

        this.item = res.data;
      }

    });
  }
  onSubmit(){
    this.data.start_date = this.dateAndTimeToString(this.callForm.value.start_date);
    this.data.end_date = this.dateAndTimeToString(this.callForm.value.end_date);
    this.data.notes = this.callForm.value.notes;

    this.service.update(this.id, this.data).subscribe((res:any)=>{  
      console.log(res);
      
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
    this.data.start_date = this.dateAndTimeToString(this.callForm.value.start_date);
    this.data.end_date = this.dateAndTimeToString(this.callForm.value.end_date);
    this.data.notes = this.callForm.value.notes;

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
    this.deletedId = id;
  }


  get start_date() {
    return this.callForm.get('start_date');
  } 
  get name() {
    return this.callForm.get('name');
  } 
  get end_date() {
    return this.callForm.get('end_date');
  }
  get notes(){
    return this.callForm.get('notes')
  }

}
