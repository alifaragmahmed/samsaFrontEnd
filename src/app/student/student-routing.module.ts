import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; 
import { StudentComponent } from './student.component'; 
import { StudentIndexComponent } from './components/student/application-index/student-index.component';
import { StudentCreateComponent } from './components/student/application-create/student-create.component';
const routes: Routes = [ 
  {
    path: '',
    component: StudentIndexComponent
  }, 
  {
    path: '/:id',
    component: StudentCreateComponent
  }, 
  {
    path: 'create',
    component: StudentCreateComponent
  }, 
 
 /* {
    path: "settings",
    component: AdminisionComponent,
    children: [
      {
        path: 'required_documents',
        component: RequiredDocumentIndexComponent
      }, 
    ]
  },*/

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
export class StudentRoutingModule {
}
