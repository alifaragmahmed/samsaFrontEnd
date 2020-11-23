import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MilitaryComponent } from './military.component';
import { MilitaryAreaComponent } from './components/military-area/military-area.component';
import { MilitaryStatusComponent } from './components/military-status/military-status.component';


const routes: Routes = [
  {
    path: "",
    component: MilitaryComponent,
    children: [
      {
        path: 'area',
        component: MilitaryAreaComponent
      },
      {
        path: 'status',
        component: MilitaryStatusComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilitaryRoutingModule { }
