import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationTypesRoutingModule } from './qualification-types-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    CommonModule,
    QualificationTypesRoutingModule
  ]
})
export class QualificationTypesModule { }
