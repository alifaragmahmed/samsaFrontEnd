import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MilitaryComponent } from './military.component';
import { MilitaryStatusComponent } from './military-status/military-status.component';


const routes: Routes = [
  {
    path: "",
    component: MilitaryComponent,
    children: [
      {
        path: 'area',
        loadChildren: './area/area.module#AreaModule'
      },{
        path:'status',
        component:MilitaryStatusComponent
      }     

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilitaryRoutingModule { }
