import { Component, OnInit } from '@angular/core';
import { militaryAreaService } from '../services/militaryArea.service';
import { IReqMilitaryArea } from '../models/IReqMilitaryArea'
import { GeneralService } from 'src/app/shared/services/general.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  public data: IReqMilitaryArea = { name: '', government_id:'', notes:'' };
  public isSubmitClick = false;
  public governments = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  constructor(
    private service:militaryAreaService,
    private generalService:GeneralService, 
    private toastr: ToastrService) {
      this.callForm = new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
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
    this.generalService.getAllGovernments().subscribe((res:any)=>{
      this.governments = res.data;
    });
   this.callHttp();
  }
  callHttp(){
    this.service.getAll().subscribe((res:any)=>{
      this.rows = res.data;
      console.log(this.rows);
      this.dtTrigger.next();

    });
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
    this.isSubmitClick = true;
    this.data.name = this.callForm.value.name;
    this.data.government_id = this.callForm.value.government_id;
    this.data.notes = this.callForm.value.notes;

    this.service.create(this.data).subscribe((res:any)=>{
      if(res.status == 0){
        this.errorMessage = res.message.name;
        this.errorMessage = res.message.percentage;
        this.isSubmitClick = false;
        return;
      }else{
        this.errorMessage = '';
        this.isSubmitClick = true;
        this.toastr.success(res.message, '');
        this.dtTrigger.unsubscribe();
        document.getElementById("cancel").click();
        this.callHttp();
        this.isSubmitClick = false;
      }
    })
  }
  get government_id() {
    return this.callForm.get('government_id');
  }
  get name() {
    return this.callForm.get('name');
  }
  get notes() {
    return this.callForm.get('notes');
  }
}
