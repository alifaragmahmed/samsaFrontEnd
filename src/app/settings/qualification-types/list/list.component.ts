import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { qualificationTypeService } from '../services/qualificationType.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IReqQualificationType } from '../models/IReqQualificationType';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

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
  public data: IReqQualificationType = {
    name:'',
    grade:'',
    qualification_id:'',
    academic_year_id:'',
    percentage:'',
    notes:'',
    level_id:'' 
  };
  hideModal: boolean = false;

  public modal = '';
  public qualifications = [];
  public academicYears = [];
  public levels = [];
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  public item = ''
  public id = '';
  public deletedId='';
  constructor(
    private generalService:GeneralService,
    private service:qualificationTypeService,
    private toastr: ToastrService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.callForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
      ]),
      qualification_id: new FormControl(null, [
        Validators.required,
      ]),
      academic_year_id: new FormControl(null, [
        Validators.required,
      ]),
      level_id: new FormControl(null, [
        Validators.required,
      ]),
      grade: new FormControl(null, [
        Validators.required,
      ]),
      percentage: new FormControl(null, [
        Validators.required,
      ]),
      
      notes :new FormControl(null, [])
    });

   }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10 
    };
    this.callHttp();
    this.generalService.getAllQualifications().subscribe((res:any)=>{
      if(res.status == 1)
      this.qualifications = res.data;
    });
    this.generalService.getAllLevels().subscribe((res:any)=>{
      if(res.status == 1)
      this.levels = res.data
    });
    this.generalService.getAllAcademicYears().subscribe((res:any)=>{
      if(res.status == 1)
      this.academicYears = res.data
    });
  }
  callHttp(): void {
    this.service.getAll().subscribe(
      (res: any) => {
        console.log(res);
        this.rows = res.data;
        this.dtTrigger.next();
      }
    );
  }
  create(){
    this.nameError = '';
    if (this.callForm.invalid) {
      this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
      return;
    }
    this.isSubmitClick = true;
    this.data.name = this.callForm.value.name;
    this.data.grade = this.callForm.value.grade;
    this.data.qualification_id = this.callForm.value.qualification_id;
    this.data.academic_year_id = this.callForm.value.academic_year_id;
    this.data.percentage = this.callForm.value.percentage;
    this.data.level_id = this.callForm.value.level_id;
    this.data.notes = this.callForm.value.notes;
    
    this.service.create(this.data).subscribe((res:any)=>{
      if(res.status == 0){
        this.errorMessage = res.message.name;
        this.errorMessage = res.message.grade;
        this.errorMessage = res.message.qualification_id;
        this.errorMessage = res.message.academic_year_id;
        this.errorMessage = res.message.level_id;
        this.errorMessage = res.message.percentage;
        this.isSubmitClick = false;
        return;
      }else{
        this.errorMessage = '';
        this.isSubmitClick = true;
        this.toastr.success(res.message, '');
        this.dtTrigger.unsubscribe();
        document.getElementById("cancel").click();

        this.hideModal  = true;
        this.callHttp();
        this.modal = 'modal';
        this.isSubmitClick = false;
      }
    })
  }
  getItemData(id){
    this.id = id;
    this.service.getItemById(id).subscribe((res:any)=>{
      if(res.status ==1){
        this.name.setValue(res.data.name);
        this.grade.setValue(res.data.grade);
        this.notes.setValue(res.data.notes);
        this.qualification_id.setValue(res.data.qualification_id);
        this.academic_year_id.setValue(res.data.academic_year_id);
        this.percentage.setValue(res.data.percentage);
        this.level_id.setValue(res.data.level_id);

        document.getElementById("openModal").click();
        this.item = res.data;
      }

    });
  }
  onSubmit(){
    this.data.name = this.callForm.value.name;
    this.data.grade = this.callForm.value.grade;
    this.data.qualification_id = this.callForm.value.qualification_id;
    this.data.academic_year_id = this.callForm.value.academic_year_id;
    this.data.percentage = this.callForm.value.percentage;
    this.data.level_id = this.callForm.value.level_id;
    this.data.notes = this.callForm.value.notes;

    this.service.update(this.id,this.data).subscribe((res:any)=>{  
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
  reset(){
    this.callForm.reset();
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
    // console.log(id);
    this.deletedId = id;
    
  }
  get name() {
    return this.callForm.get('name');
  }
  get grade() {
    return this.callForm.get('grade');
  }
  get qualification_id() {
    return this.callForm.get('qualification_id');
  }
  get academic_year_id() {
    return this.callForm.get('academic_year_id');
  }
  get percentage() {
    return this.callForm.get('percentage');
  }
  get level_id() {
    return this.callForm.get('level_id');
  }
  get notes() {
    return this.callForm.get('notes');
  }

}
