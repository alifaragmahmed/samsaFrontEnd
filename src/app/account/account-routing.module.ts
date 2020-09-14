import { SafeIndexComponent } from './components/safe/safe-index/safe-index.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ServiceIndexComponent } from './components/services/service-index/service-index.component';


const routes: Routes = [
  {
    path: 'safe',
    component: SafeIndexComponent
  },
  {
    path: 'services',
    component: ServiceIndexComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
