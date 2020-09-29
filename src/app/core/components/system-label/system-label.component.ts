import { Component, OnInit } from '@angular/core';
import { SystemSettingService } from '../../services/system-setting.service';

@Component({
  selector: 'app-system-label',
  templateUrl: './system-label.component.html',
  styleUrls: ['./system-label.component.scss']
})
export class SystemLabelComponent implements OnInit {

  setting: any = {};

  constructor(private systemSettingService: SystemSettingService) { }

  loadSettings() {
    this.systemSettingService.getSystemSetting().subscribe((res: any)=>{
      this.setting = res;
    });
  }

  ngOnInit() {
    this.loadSettings();
  }

}
