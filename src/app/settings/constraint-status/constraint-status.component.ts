import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IReqConstraintStatus } from './models/IReqConstraintStatus';
import { ConstraintStatusService } from './services/ConstraintStatusService.service';

@Component({
  selector: 'app-constraint-status',
  templateUrl: './constraint-status.component.html',
  styleUrls: ['./constraint-status.component.scss']
})
export class ConstraintStatusComponent implements OnInit {

  public callForm: FormGroup;
  public errorMessage = '';
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  public data: IReqConstraintStatus = { name: '', notes:'' };

  public item = ''
  public id = '';
  constructor(
    private toastr: ToastrService,
    private service:ConstraintStatusService,
    private router:Router,
    private route: ActivatedRoute, 


    ) { 
      this.callForm = new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
        notes: new FormControl(null, []),
      });

    }


    getItemData(id){
      this.id = id;
      this.service.getItemById(id).subscribe((res:any)=>{
        if(res.status ==1){
          this.item = res.data;
          this.name.setValue(res.data.name);
          this.notes.setValue(res.data.notes);

          document.getElementById("openModal").click();
        }

      });
    }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

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
  onSubmit(){
    const itemData: IReqConstraintStatus = {
      name: this.callForm.value.name,
      notes : this.callForm.value.notes
    };
    this.service.update(this.id, itemData).subscribe((res:any)=>{      
      if(res.status == 1){
        document.getElementById("cancel").click();
        this.callHttp();
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
    this.data.notes = this.callForm.value.notes;
    this.data.name = this.callForm.value.name;

    this.service.create(this.data).subscribe((res:any)=>{      
      if(res.status == 0){
        if(res.message.name)
        this.toastr.error(res.message, '');
        this.errorMessage = res.message;
        this.isSubmitClick = false;
        return;
      }else{
        this.errorMessage = '';
        this.isSubmitClick = true;
        this.toastr.success(res.message, '');
        this.dtTrigger.unsubscribe();
        document.getElementById("cancel").click();
        this.callHttp();
      }
    })
  }

  delete(id) {
    this.service.delete(id).subscribe(
      (res) => {
        if(res.status == 1){
          document.getElementById("cancello").click();
          this.toastr.success(res.message, '');
          const index = this.rows.findIndex(v => v.id === id);
          this.rows.splice(index, 1);
        }else{
          this.toastr.error(res.message, '');
        }
       
      });
  }

  get name() {
    return this.callForm.get('name');
  }
  get notes() {
    return this.callForm.get('notes');
  }

}
