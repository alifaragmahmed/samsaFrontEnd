import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ApplicationCreateComponent } from '../adminision/components/application/application-create/application-create.component';
import { ApplicationIndexComponent } from '../adminision/components/application/application-index/application-index.component';
import { StudentCreateComponent } from '../student/components/student/student-create/student-create.component';
import { StudentIndexComponent } from '../student/components/student/student-index/student-index.component';
import { StudentComponent } from '../student/student.component';
import { AffairsComponent } from './affairs.component';

const routes: Routes = [
   {
    path: "",
    component: AffairsComponent,
    children: [
      {
        path: 'students',
        component: StudentIndexComponent
      },
      {
        path: 'students/create',
        component: StudentCreateComponent
      },
      {
        path: 'applications',
        component: ApplicationIndexComponent
      },
      {
        path: 'applications/create',
        component: ApplicationCreateComponent
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
export class AffairsRoutingModule {
}
