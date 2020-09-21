import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { AreaRoutingModule } from './area-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    AreaRoutingModule,
  ]
})
export class AreaModule { }
