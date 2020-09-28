import {NgModule} from '@angular/core'; 
import {SharedModule} from '../shared/shared.module'; 
import { DataTablesModule } from 'angular-datatables'; 
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';  
import { StudentShowComponent } from './components/student/student-show/student-show.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { StudentIndexComponent } from './components/student/student-index/student-index.component';
import { ApplicationSettingService } from '../adminision/services/application-setting.service';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ 
    StudentComponent,
    StudentCreateComponent,
    StudentIndexComponent ,
    StudentShowComponent
],
  imports: [
    SharedModule,  
    StudentRoutingModule,
    MatButtonModule,
    DataTablesModule
  ]
})
export class StudentModule {
  constructor( 
    private applicationSettingService: ApplicationSettingService) {
      this.applicationSettingService.loadSettings(); 
    }
}
