import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IReqCity } from '../model/IReqCity';
import { ToastrService } from 'ngx-toastr';
import { CityService } from '../services/city.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public data: IReqCity = { name: '', government_id:'', country_id:''};
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public governmentError = '';
  public countryError = '';
  public isSubmitClick = false;
  public countries = [];
  public governments = [];

  public sucreq = false;
  public row;
  public id;
  
  constructor(
    private service:CityService,
    private generalService :GeneralService,
    private toastr: ToastrService,
    private route: ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit() {
    this.callForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      country_id: new FormControl(null, [
        Validators.required,
      ]),
      government_id: new FormControl(null, [
        Validators.required,
      ]),
    });

    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    
    this.generalService.getAllCountries().subscribe((res:any)=>{
      this.countries = res.data;
    });
    this.generalService.getAllGovernments().subscribe((res:any)=>{
      this.governments = res.data;
    });
    this.service.getItemById(this.id).subscribe((res:any)=>{
      console.log(res);

      if(res.status == 1){
        this.name.setValue(res.data.name);
        this.country_id.setValue(res.data.government.country.id);
        this.government_id.setValue(res.data.government_id);
      }
      
    });
  }
  getGovernments(country_id){
    this.generalService.getCountryGovernments(country_id.value).subscribe((res:any)=>{
      this.governments = res.data;      
    });
    
  }
  onSubmit(){
    const itemData: IReqCity = {
      name: this.name.value,
      government_id:this.government_id.value,
      country_id: this.country_id.value,
    };
    this.service.update(this.id, itemData).subscribe((res)=>{
      if(res.status == 1){
        this.router.navigate(['/settings/city/']).then(() => {
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
  get government_id() {
    return this.callForm.get('government_id');
  }

}
