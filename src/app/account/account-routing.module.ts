import { SafeIndexComponent } from './components/safe/safe-index/safe-index.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ServiceIndexComponent } from './components/services/service-index/service-index.component';
import { AccountComponent } from './account.component';
import { AcademicYearIndexComponent } from './components/academic-year-index/academic-year-index.component';
import { StoreIndexComponent } from './components/store/store-index/store-index.component';
import { OldBalanceComponent } from './components/old-balance/old-balance.component';
import { PaymentDetailsReportComponent } from './components/report/payment-details-report/payment-details-report.component';


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
    path: 'report/payment-details',
    component: PaymentDetailsReportComponent
  },
  {
    path: "setting",
    component: AccountComponent,
    children: [
      {
        path: '',
        component: OldBalanceComponent
      },
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
