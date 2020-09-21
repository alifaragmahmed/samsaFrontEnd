import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {IUserLogin} from '../../../shared/models/IUserLogin';
import {AuthService} from '../../../shared/services/auth.service';
import { Cache } from '../../../shared/cache';
import { Message } from '../../../shared/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public userAuth: any = {};
  
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
 
  public isSubmitted = false;  

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // noinspection TsLint 
    }); 
  }
 
  login() { 
    this.isSubmitted = true;
     
    this.authService.login(this.userAuth).subscribe((result) => {
        const data: any = result;

        if (data.status == 1) {
          // cache user 
          Cache.set(AuthService.USER_PRFIX, data.data);

          // cache api token 
          Cache.set(AuthService.API_TOKEN_PRFIX, data.data.api_token);
          this.router.navigate(['/']).then().catch();
        } else {
          Message.error(data.message);
        } 

        this.isSubmitted = false;
      },
      (e) => { 
        Message.error(e);
        this.isSubmitted = false;
      }
    );
  }
}
