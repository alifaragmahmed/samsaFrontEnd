import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';
import { IReqAcademicYear } from '../models/IReqAcademicYear';
import { AcademicYearService } from '../services/academic-year.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  private id: string;
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public data: IReqAcademicYear = { start_date: '', end_date:'', notes:'' };
  constructor(
    private route: ActivatedRoute, 
    private service:AcademicYearService, 
    private toastr: ToastrService,
    private router:Router
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
    this.id = this.route.snapshot.params.id;
    this.service.getItemById(this.id).subscribe((res:any) => {
      console.log(res);
      if(res.status == 1){
        this.start_date.setValue(res.data.start_date);
        this.end_date.setValue(res.data.end_date);
        this.notes.setValue(res.data.notes);

      }
    });
  }
  onSubmit(){
    const itemData: IReqAcademicYear = {
      start_date: this.start_date.value,
      end_date:this.end_date.value,
      notes:this.notes.value,
    };
    this.service.update(this.id, itemData).subscribe((res:any)=>{
      console.log(res);
      
      if(res.status == 1){
        this.router.navigate(['/settings/academic-year']).then(() => {
          this.toastr.success(res.message, '');
        });
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
