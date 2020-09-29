import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

import { MilitaryRoutingModule } from './military-routing.module';
import { MilitaryComponent } from './military.component';
import { MilitaryStatusComponent } from './military-status/military-status.component';
import { AreaSubmissionComponent } from './area-submission/area-submission.component';

@NgModule({
  declarations: [MilitaryComponent, MilitaryStatusComponent, AreaSubmissionComponent],
  imports: [
    CommonModule,
    MilitaryRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class MilitaryModule { }
