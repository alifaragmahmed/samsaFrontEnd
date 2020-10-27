import { SafeIndexComponent } from './components/safe/safe-index/safe-index.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ServiceIndexComponent } from './components/services/service-index/service-index.component';
import { AccountComponent } from './account.component';
import { AcademicYearIndexComponent } from './components/academic-year-index/academic-year-index.component';
import { StoreIndexComponent } from './components/store/store-index/store-index.component';
import { OldBalanceComponent } from './components/old-balance/old-balance.component';
import { PaymentDetailsReportComponent } from './components/report/payment-details-report/payment-details-report.component';
import { DiscountTypeIndexComponent } from './components/discountType/discount-type-index/discount-type-index.component';
import { StudentDetailsReportComponent } from './components/report/student-details-report/student-details-report.component';
import { StudentBalanceReportComponent } from './components/report/student-balance-report/student-balance-report.component';
import { ReportCreatorReportComponent } from './components/report/report-creator-report/report-creator-report.component';
import { InstallmentReportComponent } from './components/report/installment-report/installment-report.component';
import { StudentDiscountReportComponent } from './components/report/student-discount-report/student-discount-report.component';


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
    path: 'report/student-details',
    component: StudentDetailsReportComponent
  },
  {
    path: 'report/student-balances',
    component: StudentBalanceReportComponent
  },
  {
    path: 'report/report-creator',
    component: ReportCreatorReportComponent
  },
  {
    path: 'report/student-installment',
    component: InstallmentReportComponent
  },
  {
    path: 'report/student-discount',
    component: StudentDiscountReportComponent
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
        path: 'discount_types',
        component: DiscountTypeIndexComponent
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
