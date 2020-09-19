import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../../shared/shared.module';
import { QualificationRoutingModule } from './qualification-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    CommonModule,
    QualificationRoutingModule,
    DataTablesModule,
    SharedModule
  ]
})
export class QualificationModule { }
