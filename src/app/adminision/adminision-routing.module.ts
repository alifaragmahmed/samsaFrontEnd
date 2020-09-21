import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; 
import { AdminisionComponent } from './adminision.component';
import { RequiredDocumentIndexComponent } from './components/required_document/required-document-index/required-document-index.component';
import { ApplicationCreateComponent } from './components/application/application-create/application-create.component';

const routes: Routes = [ 
  {
    path: 'application/create',
    component: ApplicationCreateComponent
  }, 
  {
    path: "settings",
    component: AdminisionComponent,
    children: [
      {
        path: 'required_documents',
        component: RequiredDocumentIndexComponent
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
export class AdminisionRoutingModule {
}
