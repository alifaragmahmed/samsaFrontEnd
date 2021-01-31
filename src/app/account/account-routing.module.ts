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
import { Auth } from '../shared/auth';
import { AuthGuestService } from '../shared/middlewares/auth-guest.service';
import { TreeIndexComponent } from './components/tree/tree-index/tree-index.component';


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
    canActivate: [AuthGuestService],
    data: {can: Auth.can('payment_detail_report')},
    component: PaymentDetailsReportComponent
  },
  {
    path: 'report/student-details',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('student_detail_report')},
    component: StudentDetailsReportComponent
  },
  {
    path: 'report/student-balances',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('account_setting')},
    component: StudentBalanceReportComponent
  },
  {
    path: 'report/report-creator',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('report_creator_report')},
    component: ReportCreatorReportComponent
  },
  {
    path: 'report/student-installment',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('installment_report')},
    component: InstallmentReportComponent
  },
  {
    path: 'report/student-discount',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('student_discount_report')},
    component: StudentDiscountReportComponent
  },
  {
    path: "setting",
    component: AccountComponent,
    children: [
      {
        path: 's',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('account_setting')},
        component: OldBalanceComponent
      },
      {
        path: 'services',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('service_read')},
        component: ServiceIndexComponent
      },
      {
        path: 'stores',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('safe_read')},
        component: StoreIndexComponent
      },
      {
        path: 'discount_types',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('discount_type_read')},
        component: DiscountTypeIndexComponent
      },
      {
        path: 'trees',
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('tree_read')},
        component: TreeIndexComponent
      },
      {
        path: 'academic_year_expenses',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('academic_expense_read')},
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
