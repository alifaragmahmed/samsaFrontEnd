import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualificationTypesRoutingModule } from './qualification-types-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    QualificationTypesRoutingModule,
    DataTablesModule
  ]
})
export class QualificationTypesModule { }
