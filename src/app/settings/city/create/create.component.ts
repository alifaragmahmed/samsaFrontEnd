import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public GameForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public governmentError = '';
  public countryError = '';

  public isSubmitClick = false;

  constructor(private cityService:CityService, private router: Router,) { }

  ngOnInit() {
  }

}
