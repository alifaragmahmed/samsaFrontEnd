import { Component, OnInit } from '@angular/core';
import { ApplicationSettingService } from '../../../services/application-setting.service';
import { Message } from '../../../../shared/message';
import { Helper } from '../../../../shared/helper';
import { ApplicationService } from '../../../services/application.service';
import { Cache } from '../../../../shared/cache';
import { LevelService } from '../../../../account/services/level.service';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.scss']
})
export class ApplicationCreateComponent implements OnInit {

  /**
   * application object
   */
  public application: any = {};

  public applicationSettings = ApplicationSettingService;

  public defaultImage: string = '/assets/img/avatar.png';

  public isSubmitted: any = false;

  public gradeError: string;

  public currentError: string;

  public required_field = [
    'name',
    'qualification_id',
    'national_id' ,
    'registration_status_id',
    'academic_years_id',
    'grade',
    'qualification_date',
    'qualification_types_id',
    'level_id'
  ];

  constructor(private applicationService: ApplicationService) { }

  validate() {
    let valid = true;

    this.required_field.forEach(element => {
      if (!this.application[element])
        valid = false;
    });

    return valid;
  }

  sendApplication() {
    if (!this.validate()) {
      return Message.error(Helper.trans('fill all requird data'));
      this.setCurrentError(Helper.trans('fill all requird data'));
    }

    this.performSendApplication(); 
  }

  performSendApplication() { 
    this.isSubmitted = true;
    this.applicationService.store(this.application).subscribe((res)=>{
      const data: any = res;

      if (data.status == 1) 
        Message.success(data.message);
      else {
        Message.error(data.message);
        this.setCurrentError(data.message);
      }

      this.isSubmitted = false;
    });
  }

  setCurrentError(error) {
    this.currentError = error;
  }

  //******************************************* */
  // level methods
  //******************************************* */

  watchLevel() {
    this.calculateLevel();
    this.setLevel();
  }

  calculateLevel() {
    const qualificationsTypes = this.applicationSettings.QUALIFICATION_TYPES;
    let levelId = null;
    let changes = false;
    let requiredGrade = null;
    qualificationsTypes.forEach(element => {
      const condition: boolean = 
      element.id == this.application.qualification_types_id && 
      element.grade <= this.application.grade;

      if (element.id == this.application.qualification_types_id)
        requiredGrade = element.grade;

      if (condition) {
        levelId = element.level_id;
        changes = true;
      }
    });

    if (requiredGrade) {
      this.gradeError = Helper.trans('grade must be equal or bigger than ') + ' : ' + requiredGrade;
      this.setCurrentError(this.gradeError);
    }
    
    if (!changes) {
      levelId = null;
    } else { 
      this.gradeError = null;
      this.setCurrentError(this.gradeError);
    }

    this.application.level_id = levelId;
  }

  setLevel() {
    const levels = Cache.get(LevelService.LEVEL_PREFIX);
    levels.forEach(element => {
      if (element.id  == this.application.level_id)
        this.application.level_name = element.name;
    });
  }

  ngOnInit() {
  }

}
