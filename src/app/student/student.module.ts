import {NgModule} from '@angular/core'; 
import {SharedModule} from '../shared/shared.module'; 
import { DataTablesModule } from 'angular-datatables'; 
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component'; 
import { StudentCreateComponent } from './components/student/application-create/student-create.component';
import { StudentIndexComponent } from './components/student/application-index/student-index.component';
@NgModule({
  declarations: [ 
    StudentComponent,
    StudentCreateComponent,
    StudentIndexComponent 
],
  imports: [
    SharedModule,  
    StudentRoutingModule,
    DataTablesModule
  ]
})
export class StudentModule {
}
