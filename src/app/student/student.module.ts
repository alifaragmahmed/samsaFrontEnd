import {NgModule} from '@angular/core'; 
import {SharedModule} from '../shared/shared.module'; 
import { DataTablesModule } from 'angular-datatables'; 
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';  
import { StudentShowComponent } from './components/student/student-show/student-show.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { StudentIndexComponent } from './components/student/student-index/student-index.component';
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
    DataTablesModule
  ]
})
export class StudentModule {
}