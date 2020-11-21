import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { SettingTemplate } from '../../setting-template';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent extends SettingTemplate implements OnInit {

  qualificationType = null;

  constructor(public settingService: SettingService,
    public levelService: SettingService,
    public departmentService: SettingService) {
    super(settingService);
    this.baseUrl = "qualifications";
    this.settingService.baseUrl = "qualifications";
    this.requiredFields = ['name'];
    this.get();


    // init qualification type
    this.qualificationType = new SettingTemplate(this.departmentService);
    this.qualificationType.baseUrl = "departments";
    this.qualificationType.requiredFields = ['name', 'level_id', 'division_id'];
    this.qualificationType.get();

  }

  ngOnInit() {
  }

}
