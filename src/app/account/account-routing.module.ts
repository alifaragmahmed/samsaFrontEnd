import { SafeIndexComponent } from './components/safe/safe-index/safe-index.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ServiceIndexComponent } from './components/services/service-index/service-index.component';
import { AccountComponent } from './account.component';
import { AcademicYearIndexComponent } from './components/academic-year-index/academic-year-index.component';
import { StoreIndexComponent } from './components/store/store-index/store-index.component';


const routes: Routes = [
  {
    path: 'safe',
    component: SafeIndexComponent
  }, 
  {
    path: 'safe/:id',
    component: SafeIndexComponent
  }, 
  {
    path: "setting",
    component: AccountComponent,
    children: [
      {
        path: 'services',
        component: ServiceIndexComponent
      }, 
      {
        path: 'stores',
        component: StoreIndexComponent
      }, 
      {
        path: 'academic_year_expenses',
        component: AcademicYearIndexComponent
      },
    ]
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
