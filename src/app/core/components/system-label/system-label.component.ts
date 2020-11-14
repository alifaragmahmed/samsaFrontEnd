import { Component, OnInit } from '@angular/core';
import { ApplicationSettingService } from 'src/app/adminision/services/application-setting.service';
import { SystemSettingService } from '../../services/system-setting.service';

@Component({
  selector: 'app-system-label',
  templateUrl: './system-label.component.html',
  styleUrls: ['./system-label.component.scss']
})
export class SystemLabelComponent implements OnInit {

  setting: any = {};
  $: any = $;
  resizable = false;

  isClosed = false;
  applicationSetting = ApplicationSettingService;

  constructor(private systemSettingService: SystemSettingService) {
    console.log(this.applicationSetting.SETTINGS);
  }

  loadSettings() {
    this.systemSettingService.getSystemSetting().subscribe((res: any)=>{
      this.setting = res;
    });
  }

  ngOnInit() {
    this.loadSettings();
  }

  toggle() {
    if (this.isClosed) {
      this.$('.setting-list-item').slideDown(300);
      this.isClosed = false;
    } else {
      this.$('.setting-list-item').slideUp(300);
      this.isClosed = true;
    }
  }

  resize() {
    if (this.resizable) {
      $('.safe-box').css('overflow', 'auto');
      $('.safe-box').css('resize', 'none');
      this.resizable = false;
    } else  {
      $('.safe-box').css('overflow', 'auto');
      $('.safe-box').css('resize', 'both');
      this.resizable = true;
    }
  }
}
