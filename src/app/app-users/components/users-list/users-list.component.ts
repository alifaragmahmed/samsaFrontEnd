import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IReqUsersSearchQuery } from '../../models/IReqUserSearchQuery';
import { UsersService } from '../../services/users.service';
import { GeneralService } from '../../../shared/services/general.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  public users: any[] = [];
  public FilterForm: FormGroup;
  public notFound = false;
  public isLoadMoreEnable = true;
  public isLoadMoreClick = false;
  public isListDataLoaded = false;
  public isEmailActivateClick = false;
  public isPhoneActivateClick = false;

  public query = {
    page: '1',
    size: '20',
    name: '',
    email: ''
  };

  constructor(
    private usersService: UsersService,
    private generalService: GeneralService,
    private toaster: ToastrService) {
  }

  ngOnInit() {
    this.FilterForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
    this.callHttp(this.query.page);
  }

  callHttp(page, fromFilter = false): void {
    this.notFound = false;
    this.usersService.getUsersList(this.query)
      .subscribe(
        (res: any) => {
          if (fromFilter === true) {
            this.users = [];
          }
          this.users.push(...res.data);
          if (this.users.length + 1 < res.total) {
            this.isLoadMoreEnable = false;
            this.query.page = (+this.query.page + 1).toString();
          } else {
            this.isLoadMoreEnable = true;
          }
          this.isListDataLoaded = true;
          this.isLoadMoreClick = false;
        }
      );
  }

  submitFilter(): void {
    this.notFound = false;
    this.query.page = '1';
    this.query.name = this.FilterForm.get('name').value;
    this.query.email = this.FilterForm.get('email').value;
    this.isListDataLoaded = false;
    this.callHttp('1', true);
  }

  public activateEmail(userId: string, e): void {
    const index = this.users.findIndex(v => v._id === userId);
    this.usersService.activateEmail(userId).subscribe(
      () => {
        this.users[index].emailActivation = true;
      },
      err => {
      }
    );
  }

  public activatePhone(userId: string, e): void {
    const index = this.users.findIndex(v => v._id === userId);
    this.usersService.activatePhone(userId).subscribe(
      () => {
        this.users[index].phoneActivation = true;
      },
      err => {
      }
    );
  }

  loadMore() {
    this.isLoadMoreClick = true;
    this.callHttp(this.query.page);
  }

}
