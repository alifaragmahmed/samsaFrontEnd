import { Component, OnInit } from '@angular/core';
import { GovernmentService } from '../services/government.service';
import { ToastrService } from 'ngx-toastr';
import { IReqItem } from '../models/IReqItem';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/shared/services/general.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public data: IReqItem = { name: '' , country_id:'', notes:''};
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public governmentError = '';
  public countryError = '';
  public isSubmitClick = false;
  public countries = [];
  public sucreq = false;
  public row;
  public id;
  constructor(
    private generalService:GeneralService, 
    private service: GovernmentService,
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
        country_id: new FormControl(null, [
          Validators.required,
        ]),
      });
    }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.generalService.getAllCountries().subscribe((res:any)=>{
      this.countries = res.data;
    });
    this.service.getItemById(this.id).subscribe((res:any)=>{
      if(res.status == 1){
        this.name.setValue(res.data.name);
        this.country_id.setValue(res.data.country_id);

      }
      
    });
  }
  onSubmit(){
    const itemData: IReqItem = {
      name: this.name.value,
      country_id: this.country_id.value,
      notes:this.notes.value,
    };
    this.service.update(this.id, itemData).subscribe((res)=>{
      if(res.status == 1){
        this.router.navigate(['/settings/government/']).then(() => {
          this.toastr.success(res.message, '');
        });
      }else{
        this.toastr.error(res.message, '');
      }
    });
  }
  get name() {
    return this.callForm.get('name');
  }
  get country_id() {
    return this.callForm.get('country_id');
  }
  get notes() {
    return this.callForm.get('notes');
  }
}
