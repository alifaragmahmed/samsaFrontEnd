import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdminisionSettingComponent } from '../adminision/components/adminision-setting/adminision-setting.component';
import { ApplicationRequiredComponent } from '../adminision/components/application-required/application-required.component';
import { ApplicationCreateComponent } from '../adminision/components/application/application-create/application-create.component';
import { ApplicationIndexComponent } from '../adminision/components/application/application-index/application-index.component';
import { RequiredDocumentIndexComponent } from '../adminision/components/required_document/required-document-index/required-document-index.component';
import { StudentCreateComponent } from '../student/components/student/student-create/student-create.component';
import { StudentIndexComponent } from '../student/components/student/student-index/student-index.component';
import { StudentComponent } from '../student/student.component';
import { AffairsComponent } from './affairs.component';
import { StudentAffairReport2Component } from './report/student-affair-report2/student-affair-report2.component';
import { StudentAffairReport1Component } from './report/student-affair-report1/student-affair-report1.component';
import { StudentAffairReport3Component } from './report/student-affair-report3/student-affair-report3.component';
import { StudentAffairReport4Component } from './report/student-affair-report4/student-affair-report4.component';
import { StudentAffairReport5Component } from './report/student-affair-report5/student-affair-report5.component';

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
      {
        path: 'settings',
        component: AdminisionSettingComponent
      },
      {
        path: 'required_documents',
        component: RequiredDocumentIndexComponent
      },
      {
        path: 'application_required',
        component: ApplicationRequiredComponent
      },
      {
        path: 'report/report1',
        component: StudentAffairReport1Component
      },
      {
        path: 'report/report2',
        component: StudentAffairReport2Component
      },
      {
        path: 'report/report3',
        component: StudentAffairReport3Component
      },
      {
        path: 'report/report4',
        component: StudentAffairReport4Component
      },
      {
        path: 'report/report5',
        component: StudentAffairReport5Component
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
