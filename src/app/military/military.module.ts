import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

import { MilitaryRoutingModule } from './military-routing.module';
import { MilitaryComponent } from './military.component';

@NgModule({
  declarations: [MilitaryComponent],
  imports: [
    CommonModule,
    MilitaryRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class MilitaryModule { }
