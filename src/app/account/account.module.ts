import {NgModule} from '@angular/core';
import {AccountRoutingModule} from './account-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ServiceIndexComponent } from './components/services/service-index/service-index.component';
import { ServiceTableComponent } from './components/services/service-table/service-table.component';
import { ServiceCreateComponent } from './components/services/service-create/service-create.component';
import { SafeIndexComponent } from './components/safe/safe-index/safe-index.component';
import { InstallmentComponent } from './components/safe/installment/installment.component';
import { StudentInstallmentComponent } from './components/safe/student-installment/student-installment.component';
import { StudentPaymentComponent } from './components/safe/student-payment/student-payment.component';
import { StudentServiceComponent } from './components/safe/student-service/student-service.component';
import { AvailableServiceComponent } from './components/safe/available-service/available-service.component'; 

@NgModule({
  declarations: [
    ServiceIndexComponent,
    ServiceTableComponent,
    ServiceCreateComponent,
    SafeIndexComponent,
    InstallmentComponent,
    StudentInstallmentComponent,
    StudentPaymentComponent,
    StudentServiceComponent,
    AvailableServiceComponent 
  ],
  imports: [
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule {
}
