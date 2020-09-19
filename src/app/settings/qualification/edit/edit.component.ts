import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IReqQualification } from '../models/IReqQualification';
import { QualificationService } from '../services/qualification.service'
import { NavigationEnd, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  private id: string;
  public isSubmitClick = false;

  constructor(
    private service:QualificationService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router:Router 
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
    this.id = this.route.snapshot.params.id;
    this.service.getItemById(this.id).subscribe((res:any) => {
      console.log(res);
      if(res.status == 1){
        this.name.setValue(res.data.name);
        this.grade.setValue(res.data.grade);
        this.notes.setValue(res.data.notes);
      }
    });
  }
  onSubmit(){
    const itemData: IReqQualification = {
      name: this.name.value,
      grade: this.grade.value,
      notes: this.notes.value,

    };
    this.service.update(this.id, itemData).subscribe((res:any)=>{
      if(res.status == 1){
        this.router.navigate(['/settings/qualifications']).then(() => {
          this.toastr.success(res.message, '');
        });
      }else{
        if(res.message.name)
        this.toastr.error(res.message.name, '');
        if(res.message.grade)
        this.toastr.error(res.message.grade, '');

      }
    });
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
