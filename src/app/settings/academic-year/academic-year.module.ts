import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { AcademicYearRoutingModule } from './academic-year-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DataTablesModule } from 'angular-datatables';
import {NgxEditorModule} from 'ngx-editor';

@NgModule({
  declarations: [CreateComponent, EditComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxEditorModule,
    AcademicYearRoutingModule,
    DataTablesModule
  ]
})
export class AcademicYearModule { }