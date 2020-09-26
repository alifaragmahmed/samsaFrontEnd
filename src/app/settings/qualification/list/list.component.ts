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
  public item = ''
  public id = '';
  public deletedId='';
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

  getItemData(id){
    this.id = id;
    this.service.getItemById(id).subscribe((res:any)=>{
      if(res.status ==1){
        this.name.setValue(res.data.name);
        this.grade.setValue(res.data.grade);
        this.notes.setValue(res.data.notes);
        document.getElementById("openModal").click();
        this.item = res.data;
      }

    });
  }
  onSubmit(){
    const itemData: IReqQualification={
      name : this.callForm.value.name,
      grade : this.callForm.value.grade,
      notes : this.callForm.value.notes
    }
    this.service.update(this.id, itemData).subscribe((res:any)=>{  
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
    const itemData: IReqQualification={
      name : this.callForm.value.name,
      grade : this.callForm.value.grade,
      notes : this.callForm.value.notes
    }

    this.service.create(itemData).subscribe((res:any)=>{            
      if(res.status == 0){
        if(res.message.name)
        this.toastr.error(res.message.name, '');
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
  reset(){
    this.callForm.reset();
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
  launchModal(id){
    // console.log(id);
    this.deletedId = id;
    
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
