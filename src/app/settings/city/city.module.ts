import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { CityRoutingModule } from './city-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [CreateComponent, ListComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    CityRoutingModule,
    DataTablesModule
  ]
})
export class CityModule { }
