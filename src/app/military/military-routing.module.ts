import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MilitaryComponent } from './military.component';
import { MilitaryAreaComponent } from './components/military-area/military-area.component';
import { MilitaryStatusComponent } from './components/military-status/military-status.component';
import { Auth } from '../shared/auth';
import { AuthGuestService } from '../shared/middlewares/auth-guest.service';


const routes: Routes = [
  {
    path: "",
    component: MilitaryComponent,
    children: [
      {
        path: 'area',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('military_area')},
        component: MilitaryAreaComponent
      },
      {
        path: 'status',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('military_status')},
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
