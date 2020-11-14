import { Component, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { Message } from 'src/app/shared/message';
import { AcademicSettingService } from '../../services/academic-setting.service';

@Component({
  selector: 'app-academic-setting',
  templateUrl: './academic-setting.component.html',
  styleUrls: ['./academic-setting.component.scss']
})
export class AcademicSettingComponent implements OnInit {

  settings = [];
  settingHash = new HashTable();
  isSubmitted = false;

  constructor(private academicSettingService: AcademicSettingService) {
    this.initSettings();
  }

  ngOnInit() {
    this.loadSettings();
  }

  initSettings() {
    this.settings = [
      {id: 1, value: this.settingHash.get(1)},
      {id: 2, value: this.settingHash.get(2)},
      {id: 3, value: this.settingHash.get(3)},
      {id: 4, value: this.settingHash.get(4)},
      {id: 5, value: this.settingHash.get(5)},
      {id: 6, value: this.settingHash.get(6)},
      {id: 7, value: this.settingHash.get(7)},
      {id: 8, value: this.settingHash.get(8)},
      {id: 9, value: this.settingHash.get(9)},
      {id: 10, value: this.settingHash.get(10)},
    ];
  }

  /**
   * load all academic settings
   */
  loadSettings() {
    this.settingHash = new HashTable();
    this.academicSettingService.get().subscribe((res: any) => {
      res.forEach(element => {
        this.settingHash.put(element.id, element.value);
      });
      this.initSettings();
    });
  }

  /**
   * update all settings of academic
   */
  updateSetting() {
    let data = {
      settings: this.settings
    };
    this.isSubmitted = true;
    this.academicSettingService.update(data).subscribe((res: any) => {
      if (res.status == 1)
        Message.success(res.message);
      else
        Message.error(res.message);

      this.isSubmitted = false;
    });
  }


}
