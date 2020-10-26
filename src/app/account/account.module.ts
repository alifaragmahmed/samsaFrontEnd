import {NgModule} from '@angular/core';
import {AccountRoutingModule} from './account-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ServiceIndexComponent } from './components/services/service-index/service-index.component';
import { ServiceCreateComponent } from './components/services/service-create/service-create.component';
import { SafeIndexComponent } from './components/safe/safe-index/safe-index.component';
import { InstallmentComponent } from './components/safe/installment/installment.component';
import { StudentInstallmentComponent } from './components/safe/student-installment/student-installment.component';
import { StudentPaymentComponent } from './components/safe/student-payment/student-payment.component';
import { StudentServiceComponent } from './components/safe/student-service/student-service.component';
import { AvailableServiceComponent } from './components/safe/available-service/available-service.component';
import { AccountComponent } from './account.component';
import { DataTablesModule } from 'angular-datatables';
import { AcademicYearIndexComponent } from './components/academic-year-index/academic-year-index.component';
import { SendNoteComponent } from './components/safe/send-note/send-note.component';
import { ServiceFormComponent } from './components/services/service-form/service-form.component';
import { StoreIndexComponent } from './components/store/store-index/store-index.component';
import { StoreUpdateComponent } from './components/store/store-update/store-update.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { StoreFormComponent } from './components/store/store-form/store-form.component';
import { OldBalanceComponent } from './components/old-balance/old-balance.component';
import { MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { PayRefundComponent } from './components/safe/pay-refund/pay-refund.component';
import { PaymentDetailsReportComponent } from './components/report/payment-details-report/payment-details-report.component';
import { SafeSettingComponent } from './components/safe/safe-setting/safe-setting.component';
import { CreateDiscountRequestComponent } from './components/safe/create-discount-request/create-discount-request.component';
import { DiscountTypeIndexComponent } from './components/discountType/discount-type-index/discount-type-index.component';
import { DiscountTypeFormComponent } from './components/discountType/discount-type-form/discount-type-form.component';
import { StudentDetailsReportComponent } from './components/report/student-details-report/student-details-report.component';
import { StudentModule } from '../student/student.module';
import { StudentShowComponent } from '../student/components/student/student-show/student-show.component';
import { StudentBalanceReportComponent } from './components/report/student-balance-report/student-balance-report.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ReportCreatorReportComponent } from './components/report/report-creator-report/report-creator-report.component';
import { CreateBalanceResetComponent } from './components/safe/create-balance-reset/create-balance-reset.component';
import { InstallmentReportComponent } from './components/report/installment-report/installment-report.component';
import { StudentDiscountReportComponent } from './components/report/student-discount-report/student-discount-report.component';

@NgModule({
  declarations: [
    ServiceIndexComponent,
    ServiceCreateComponent,
    SafeIndexComponent,
    InstallmentComponent,
    StudentInstallmentComponent,
    StudentPaymentComponent,
    StudentServiceComponent,
    AvailableServiceComponent,
    AccountComponent,
    AcademicYearIndexComponent,
    SendNoteComponent,
    ServiceFormComponent,
    StoreIndexComponent,
    StoreFormComponent,
    StoreUpdateComponent,
    OldBalanceComponent,
    PayRefundComponent,
    PaymentDetailsReportComponent,
    SafeSettingComponent,
    CreateDiscountRequestComponent,
    DiscountTypeIndexComponent,
    DiscountTypeFormComponent,
    StudentDetailsReportComponent,
    StudentBalanceReportComponent,
    ReportCreatorReportComponent,
    CreateBalanceResetComponent,
    InstallmentReportComponent,
    StudentDiscountReportComponent,
  ],
  imports: [
    SharedModule,
    AccountRoutingModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    GoogleChartsModule
  ],
  exports: [
    StudentPaymentComponent
  ],
  providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ]
})
export class AccountModule {
}
