import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';
import { CountryService } from '../services/country.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IReqCreateCountry } from '../model/IReqCreateCountry';

@Component({
  selector: 'app-create-country',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public governmentError = '';
  public countryError = '';
  public data: IReqCreateCountry = { name: '', notes:'' };
  public isSubmitClick = false;
  mySubscription: any;

  public disapear = false;
  constructor(
    private countryService: CountryService,
    private router: Router,
    private toastr: ToastrService
    ) {
      
     }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
      }, 5000);
    this.callForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
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
    this.countryService.create(this.data).subscribe((res:any)=>{
      if(res.status == 0){
        this.errorMessage = res.message.name;
        this.isSubmitClick = false;
        return;
      }else{
        this.errorMessage = '';
        this.isSubmitClick = true;
        this.nonReload();
        // this.router.navigate(['/settings/country']).then(() => {
        //   this.toastr.success('تم انشاء البيانات بنجاح', '');
        // }).catch((e)=>{
        //     this.errorMessage = e.error.message;
        // })
      }
      
      (e) => {
        this.isSubmitClick = false;
        if (e.status == 400) {
          this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
          for (let i = 0; i < e.error.errors.length; i++) {
            if (e.error.errors[i].input === 'name') {
              this.nameError = e.error.errors[i].message;
            }
          }
        }
      };
    })
  }

  get name() {
    return this.callForm.get('name');
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  nonReload(){
    setTimeout(()=>{
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
    },5000)
  }
}
