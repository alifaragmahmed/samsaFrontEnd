import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { ApplicationSettingService } from '../../services/application-setting.service';

@Component({
  selector: 'app-adminision-setting',
  templateUrl: './adminision-setting.component.html',
  styleUrls: ['./adminision-setting.component.scss']
})
export class AdminisionSettingComponent implements OnInit {

  breadcrumbList: any = [];
  adminisionSetting5: any = {};


  isSubmitted5 = false;

  constructor(private service: ApplicationSettingService) {
    // init breadcrum
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: 'adminision_settings'}
    ];
  }


  loadSettings() {
    this.service.getSettings().subscribe((r: any) => {
      r.forEach(element => {
        if (element.id == 5) {
          this.adminisionSetting5 = element;
        }
      });
    });
  }

  updateSettings(element) {
    this.isSubmitted5 = true;
    this.service.updateSetting(element).subscribe((r: any) => {
      if (r.status == 1) {
        Message.success(r.message);
      } else {
        Message.error(r.message);
      }
      this.isSubmitted5 = false;
    });
  }

  ngOnInit() {
    this.loadSettings();
  }

}
