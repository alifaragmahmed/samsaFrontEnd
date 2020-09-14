import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {IUserLogin} from '../../../shared/models/IUserLogin';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public loginForm: FormGroup;
  public isSubmitted = false;
  public errorMessage = null;
  public returnTo: string;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // noinspection TsLint
      this.returnTo = params['return'] || '/admin/dashboard';
    });
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  get email() {return this.loginForm.get('email'); }

  get password() {return this.loginForm.get('password'); }

  login() {
    this.errorMessage = null;
    if (this.loginForm.invalid) {
      this.errorMessage = 'Invalid Username or/and password';
      return;
    }
    this.isSubmitted = true;
    const userLogInData: IUserLogin = {
      email: this.email.value,
      password: this.password.value
    };
    this.authService.login(userLogInData).subscribe(
      (result) => {
        this.authService.setAdminLoalStorage(result);
        this.authService.notifySubscribers(true);
        this.router.navigate([this.returnTo]).then().catch();
      },
      (e) => {
        this.errorMessage = e.error.message;
        this.isSubmitted = false;
      }
    );
  }
}
