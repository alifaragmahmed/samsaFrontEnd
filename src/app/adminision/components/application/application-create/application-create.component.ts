import { Component, OnInit } from '@angular/core';
import { ApplicationSettingService } from '../../../services/application-setting.service';
import { Message } from '../../../../shared/message';
import { Helper } from '../../../../shared/helper';
import { ApplicationService } from '../../../services/application.service';
import { Cache } from '../../../../shared/cache';
import { LevelService } from '../../../../account/services/level.service';
import { AppModule } from '../../../../app.module';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { HashTable } from '../../../../../../node_modules/angular-hashtable';
import { Request } from 'src/app/shared/request';
import { Auth } from 'src/app/shared/auth';
import { exit } from 'process';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.scss']
})
export class ApplicationCreateComponent implements OnInit {

  public doc: any = AppModule.doc;
  /**
   * application object
   */
  public application: any = {};

  public applicationSettings = ApplicationSettingService;

  public defaultImage: string = '/assets/img/avatar.png';

  public isSubmitted: any = false;

  public gradeError: string;

  public currentError: string;

  public isUpdate = false;

  public isAzhar = false;

  public qualificationGrade = 0;

  public requiredDocumentList = new HashTable();

  public differentYearRequired = 0;

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
    //'case_constraint_id'
  ];

  public col = "col-lg-10 col-md-10 col-sm-12";
  constructor(private applicationService: ApplicationService, private route: ActivatedRoute, private applicationSettingService: ApplicationSettingService) {
    this.applicationSettingService.queueRequests();
    Request.fire();
    const id = this.route.snapshot.params['id'];
    if (id > 0) {
      !Auth.can('application_edit')? exit() : '';
      this.loadApplication(id);
      this.isUpdate = true;
    } else {
      !Auth.can('application_add')? exit() : '';
    }

    this.route.queryParams.subscribe((params) => {
      let col = params['col'];
      if (col)
        this.col = col;
    });
  }

  loadApplication(id) {
    this.applicationService.load(id).subscribe((res: any) => {
      this.application = res;
    });
  }

  validate() {
    let valid = true;

    this.required_field.forEach(element => {
      if (!this.application[element])
        valid = false;
    });

    return valid;
  }

  validateOnRegisterationStatusDocument() {
    this.requiredDocumentList = new HashTable();
    this.applicationSettings.REGSITERATIN_STATUS_DOCUMENTS.forEach(element => {
      if (element.registeration_status_id	 == this.application.registration_status_id) {
        this.requiredDocumentList.put(element.required_document_id, 1);
      }
    });
  }

  validateOnQualificationDate() {
    if (!this.application.qualification_date)
      return false;

    this.differentYearRequired = 0;
    this.applicationSettings.SETTINGS.forEach(element => {
      if (element.id == 5)
        this.differentYearRequired = element.value;
    });
    // current year
    let currentYear = new Date().getFullYear();
    let qualificationYear = new Date(this.application.qualification_date).getFullYear();
    let differentYear = currentYear - qualificationYear;

    console.log(differentYear);
    if (differentYear > this.differentYearRequired)
      return false;

    return true;
  }

  sendApplication() {
    if (!this.validate()) {
      this.setCurrentError(Helper.trans('fill all requird data'));
      return Message.error(Helper.trans('fill all requird data'));
    }
    if (!this.validateOnQualificationDate())
      return Message.error(Helper.trans('different year of qualification must be less of equal than ' + this.differentYearRequired));

    if (this.isUpdate)
      this.performUpdateApplication();
    else
      this.performSendApplication();
  }

  performUpdateApplication() {
    this.isSubmitted = true;
    let data = new FormData();
    for(let key of Object.keys(this.application)) {
      if(this.application[key])
        data.append(key, this.application[key]);
    }

    //return console.log(data);
    this.applicationService.update(data).subscribe((res)=>{
      const data: any = res;

      if (data.status == 1)  {
        Message.success(data.message);
      }
      else {
        Message.error(data.message);
        this.setCurrentError(data.message);
      }
      this.isSubmitted = false;
    });
  }

  performSendApplication() {
    this.isSubmitted = true;
    let data = new FormData();
    for(let key of Object.keys(this.application)) {
      if(this.application[key])
        data.append(key, this.application[key]);
    }
    this.applicationService.store(data).subscribe((res)=>{
      const data: any = res;

      if (data.status == 1)  {
        Message.success(data.message);
        this.reset();
      }
      else {
        Message.error(data.message);
        this.setCurrentError(data.message);
      }

      this.isSubmitted = false;
    });
  }

  reset() {
    this.application = {};
    this.currentError = '';
  }

  setCurrentError(error) {
    if (!error)
      return;
    error = error.replace(/<br>/g, '\n');
    this.currentError = error;
  }

  toggle(selector) {
    if (selector) {
      this.doc.jquery('.application-panel').slideUp(500);
      this.doc.jquery('.'+selector).slideDown(500);
    } else {
      this.doc.jquery('.application-panel').slideDown(500);
    }
  }

  setFile(event, key, required_document_id=null) {
    this.application[key] = event.target.files[0];
    console.log(this.application[key]);

    if (required_document_id) {
      if (!this.application[key])
        this.requiredDocumentList.put(required_document_id, 1);
      else
        this.requiredDocumentList.put(required_document_id, 2);
    }
  }

  viewPersonalImage(event) {
    this.setFile(event, 'personal_photo');
    var reader = new FileReader();
    reader.readAsDataURL(this.application.personal_photo);
    reader.onload = (_event) => {
      this.application.personal_photo_url = reader.result;
    }
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

      if (element.id == this.application.qualification_types_id) {
        requiredGrade = element.grade;
        this.qualificationGrade = requiredGrade;
      }

      if (condition) {
        levelId = element.level_id;
        changes = true;
      }
    });

    if (requiredGrade) {
      this.gradeError = Helper.trans('grade must be equal or bigger than ') + ' : ' + requiredGrade;
      this.setCurrentError(this.gradeError);
    } else {
      this.setCurrentError("");
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

  getQualificationGrade(qualificationId=null) {
    let grade = 0;
    if (!qualificationId)
      qualificationId = this.application.qualification_id;
    this.applicationSettings.QUALIFICATIONS.forEach(element => {
      if (element.id == qualificationId)
        grade = element.grade;
    });
    return grade;
  }


  checkIfAzhar() {
    if (this.application.qualification_id == 4)
      this.isAzhar = true;
    else
      this.isAzhar = false;

    if (this.application.azhar_total_grade &&
      this.application.azhar_religious_grade_total &&
      this.application.qualification_id == 4) {
        this.application.azhar_remind_grade = this.application.azhar_total_grade - this.application.azhar_religious_grade_total;
        let grade = this.getQualificationGrade(1) * this.application.azhar_remind_grade;
        grade /= this.qualificationGrade;
        this.application.grade = grade.toFixed(2);

        this.watchLevel();
      }
  }

  emptyData() {
    this.application.qualification_types_id = null;
    this.application.level_id = null;
    this.application.level_name = null;
    this.application.grade = 0;
  }

  filterDataBaisedOnGender() {
    if (this.application.gender == 'female') {
      this.doc.jquery('.military-info-panel').hide();
      this.doc.jquery('.military-info-button').hide();
    }
  }

  ngOnInit() {
  }

}
