import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { AccountSettingService } from '../../services/account-setting.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-old-balance',
  templateUrl: './old-balance.component.html',
  styleUrls: ['./old-balance.component.scss']
})
export class OldBalanceComponent implements OnInit {

  breadcrumbList: any = [];
  oldBalanceSetting: any = {};

  stores: any = [];

  isSubmittedOldbalance = false;

  constructor(private storeService: StoreService, private accountSettingService: AccountSettingService) {
    // init breadcrum
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: Helper.trans('academic_years_expenses')}
    ];
  }

  loadStores() {
    this.storeService.get().subscribe((r) => {
      this.stores = r;
    });
  }

  loadOldBalanceSettings() {
    this.accountSettingService.get().subscribe((r: any) => {
      r.forEach(element => {
        if (element.id == 1) {
          this.oldBalanceSetting = element;
        }
      });
    });
  }

  updateOldBalanceSetting() {
    this.isSubmittedOldbalance = true;
    this.accountSettingService.update(this.oldBalanceSetting).subscribe((r: any) => {
      if (r.status == 1) {
        Message.success(r.message);
      } else {
        Message.error(r.message);
      }
    });
  }

  ngOnInit() {
    this.loadOldBalanceSettings();
    this.loadStores();
  }

}
