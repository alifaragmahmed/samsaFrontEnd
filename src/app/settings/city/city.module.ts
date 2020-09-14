import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [CreateComponent, ListComponent, EditComponent],
  imports: [
    CommonModule,
    CityRoutingModule
  ]
})
export class CityModule { }
