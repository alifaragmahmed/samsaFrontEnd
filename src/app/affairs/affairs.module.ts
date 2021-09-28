import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffairsRoutingModule } from './affairs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AffairsComponent } from './affairs.component';
import { StudentModule } from '../student/student.module';
import { AccountModule } from '../account/account.module';
import { AdminisionModule } from '../adminision/adminision.module';
import { StudentAffairReport1Component } from './report/student-affair-report1/student-affair-report1.component';
import { StudentAffairReport2Component } from './report/student-affair-report2/student-affair-report2.component';
import { StudentAffairReport3Component } from './report/student-affair-report3/student-affair-report3.component';
import { StudentAffairReport4Component } from './report/student-affair-report4/student-affair-report4.component';
import { StudentAffairReport5Component } from './report/student-affair-report5/student-affair-report5.component';

@NgModule({
  declarations: [
    AffairsComponent,
    StudentAffairReport1Component,
    StudentAffairReport2Component,
    StudentAffairReport3Component,
    StudentAffairReport4Component,
    StudentAffairReport5Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AffairsRoutingModule,
    StudentModule,
    AccountModule,
    AdminisionModule
  ]
})
export class AffairsModule { }
