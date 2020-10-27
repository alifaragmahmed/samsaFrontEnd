import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffairsRoutingModule } from './affairs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AffairsComponent } from './affairs.component';
import { StudentModule } from '../student/student.module';
import { AccountModule } from '../account/account.module';
import { AdminisionModule } from '../adminision/adminision.module';

@NgModule({
  declarations: [AffairsComponent],
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
