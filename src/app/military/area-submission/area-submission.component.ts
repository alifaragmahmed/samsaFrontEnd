import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { from, Subject } from "rxjs";
import { IReqAreaSubmission } from "./IReqAreaSubmission";
import { MilitaryAreaSubmissionService } from "./area-submission.service";
import { GeneralService } from "../../shared/services/general.service";
@Component({
  selector: 'app-area-submission',
  templateUrl: './area-submission.component.html',
  styleUrls: ['./area-submission.component.scss']
})
export class AreaSubmissionComponent implements OnInit {
  public callForm: FormGroup;
  public errorMessage = '';
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  public data: IReqAreaSubmission = { military_area_id: '', government_id:'', notes:''};
  public governments = [];
  public militaryAreas = [];
  public item = ''
  public id = '';
  public deletedId='';
  constructor(private generaleServices:GeneralService , private service:MilitaryAreaSubmissionService, private toastr: ToastrService) { 
    this.callForm = new FormGroup({
      military_area_id: new FormControl(null, [
        Validators.required,
      ]),
      government_id: new FormControl(null, [
        Validators.required,
      ]),
      notes: new FormControl(null, []),
    });
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.generaleServices.getAllGovernments().subscribe((res:any) => {
      this.governments = res.data;
      console.log(res.data);
      
    });
    this.generaleServices.getAllMilitaryAres().subscribe((res:any)=>{
      console.log(res.data);
      this.militaryAreas = res.data;
    });
    this.callHttp();
  }
  callHttp(): void {
    this.service.getAll().subscribe(
      (res: any) => {        
        this.rows = res.data;
        this.dtTrigger.next();
      }
    );
  }
  getItemData(id){
    this.id = id;
    this.service.getItemById(id).subscribe((res:any)=>{
      if(res.status ==1){
        this.military_area_id.setValue(res.data.military_area_id);
        this.government_id.setValue(res.data.government_id);
        this.notes.setValue(res.data.notes);
        document.getElementById("openModal").click();
        this.item = res.data;
      }

    });
  }
  onSubmit(){
    const itemData: IReqAreaSubmission = {
      military_area_id: this.callForm.value.military_area_id,
      government_id: this.callForm.value.government_id,
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
   
    const itemData: IReqAreaSubmission = {
      military_area_id: this.callForm.value.military_area_id,
      government_id: this.callForm.value.government_id,
      notes : this.callForm.value.notes
    };
    this.service.create(itemData).subscribe((res:any)=>{            
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
    this.deletedId = id;
  }

  get military_area_id() {
    return this.callForm.get('military_area_id');
  }
  get government_id() {
    return this.callForm.get('government_id');
  }
  get notes() {
    return this.callForm.get('notes');
  }

}
