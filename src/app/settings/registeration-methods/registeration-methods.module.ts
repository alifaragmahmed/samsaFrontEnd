import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../../shared/shared.module';
import { RegisterationMethodsRoutingModule } from './registeration-methods-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    RegisterationMethodsRoutingModule
  ]
})
export class RegisterationMethodsModule { }
