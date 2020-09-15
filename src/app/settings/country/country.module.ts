import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CountryRoutingModule } from './country-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [CreateComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    CountryRoutingModule,
    DataTablesModule

  ]
})
export class CountryModule { }
