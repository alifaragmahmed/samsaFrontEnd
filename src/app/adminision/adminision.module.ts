import {NgModule} from '@angular/core'; 
import {SharedModule} from '../shared/shared.module'; 
import { DataTablesModule } from 'angular-datatables';
import { RequiredDocumentIndexComponent } from './components/required_document/required-document-index/required-document-index.component';
import { RequiredDocumentCreateComponent } from './components/required_document/required-document-create/required-document-create.component';
import { RequiredDocumentUpdateComponent } from './components/required_document/required-document-update/required-document-update.component';
import { AdminisionRoutingModule } from './adminision-routing.module';
import { AdminisionComponent } from './adminision.component';
import { ApplicationCreateComponent } from './components/application/application-create/application-create.component';
 
@NgModule({
  declarations: [ 
    AdminisionComponent,
    RequiredDocumentIndexComponent, 
    RequiredDocumentCreateComponent, 
    RequiredDocumentUpdateComponent, ApplicationCreateComponent, 
],
  imports: [
    SharedModule,  
    AdminisionRoutingModule,
    DataTablesModule
  ]
})
export class AdminisionModule {
}
