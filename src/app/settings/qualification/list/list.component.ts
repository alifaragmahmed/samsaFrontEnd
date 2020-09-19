import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IReqQualification } from '../models/IReqQualification';
import { Subject } from 'rxjs';
import { GeneralService } from 'src/app/shared/services/general.service';
import { QualificationService } from '../services/qualification.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  // public data: IReqQualification ;
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];

  constructor(
    private service:QualificationService,
    private toastr: ToastrService

    ) {
      this.callForm = new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
        grade : new FormControl(null, [
          Validators.required,
        ]),
        notes : new FormControl(),
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
    this.callHttp()
  }
  callHttp(){
    this.service.getAll().subscribe((res)=>{
      this.rows = res.data;
      this.dtTrigger.next();
      this.isSubmitClick = false;

    })
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
  create(){
    this.nameError = '';
    if (this.callForm.invalid) {
      this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
      return;
    }
    const data: IReqQualification={
      name : this.callForm.value.name,
      grade : this.callForm.value.grade,
      notes : this.callForm.value.notes
    }
    this.isSubmitClick = true;
    // this.data.name = this.callForm.value.name;
    // this.data.grade = this.callForm.value.grade;
    // this.data.notes = this.callForm.value.notes;

    this.service.create(data).subscribe((res:any)=>{
      if(res.status == 0){
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
          this.errorMessage = res.message;
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
  get grade() {
    return this.callForm.get('grade');
  }
  get notes() {
    return this.callForm.get('notes');
  }
}
