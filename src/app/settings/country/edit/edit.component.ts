import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';
import { IReqCreateCountry } from '../model/IReqCreateCountry';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private countryService:CountryService, 
    private toastr: ToastrService,
    private router:Router
    ) { }
  private id: string;
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public data: IReqCreateCountry = { name: '', notes:'' };

  ngOnInit() {
    this.callForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
    });
    this.id = this.route.snapshot.params.id;
    this.countryService.getItemById(this.id).subscribe((res:any) => {
      console.log(res);
      if(res.status == 1){
        this.name.setValue(res.data.name);
      }
    });
  }
  onSubmit(){
    const itemData: IReqCreateCountry = {
      name: this.name.value,
      notes:this.notes.value,
    };
    this.countryService.update(this.id, itemData).subscribe((res:any)=>{
      console.log(res);
      
      if(res.status == 1){
        this.router.navigate(['/settings/country']).then(() => {
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
  get notes() {
    return this.callForm.get('notes');
  }

}
