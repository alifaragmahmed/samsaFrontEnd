import { Component, OnInit } from '@angular/core'; 
import { Message } from '../../../../shared/message';
import { Helper } from '../../../../shared/helper'; 
import { Cache } from '../../../../shared/cache';
import { LevelService } from '../../../../account/services/level.service';
import { AppModule } from '../../../../app.module';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { ApplicationSettingService } from '../../../../adminision/services/application-setting.service';
import { StudentService } from '../../../services/student.service';
import { DivisionService } from '../../../../account/services/division.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {

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

  public levels: any;
  public divisions: any;

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

  constructor(private studentService: StudentService, private route: ActivatedRoute) { 
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadApplication(id);
      this.isUpdate = true;  
    }
  }

  loadApplication(id) {
    this.studentService.load(id).subscribe((res: any) => {
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

  sendApplication() {
    if (!this.validate()) {
      return Message.error(Helper.trans('fill all requird data'));
      this.setCurrentError(Helper.trans('fill all requird data'));
    }
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
    this.studentService.update(data).subscribe((res)=>{
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
    this.studentService.store(this.application).subscribe((res)=>{
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

  setFile(event, key) { 
    this.application[key] = event.target.files[0];
    console.log(this.application[key]);
  }

  viewPersonalImage(event) {
    this.setFile(event, 'personal_photo');  
    var reader = new FileReader(); 
    reader.readAsDataURL(this.application.personal_photo); 
    reader.onload = (_event) => { 
      this.application.personal_photo_url = reader.result; 
    } 
  }
 
  ngOnInit() {
    this.levels = Cache.get(LevelService.LEVEL_PREFIX);
    this.divisions = Cache.get(DivisionService.DIVISION_PREFIX);
  }

}
