import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MilitaryComponent } from './military.component';


const routes: Routes = [
  {
    path: "",
    component: MilitaryComponent,
    children: [
      {
        path: 'area',
        loadChildren: './area/area.module#AreaModule'
      }      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilitaryRoutingModule { }
