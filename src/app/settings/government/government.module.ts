import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { GovernmentRoutingModule } from './government-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [ListComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    GovernmentRoutingModule
  ]
})
export class GovernmentModule { }
