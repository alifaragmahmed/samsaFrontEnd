import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicPlanComponent } from './components/academic-plan/academic-plan.component';
import { AcademicSettingComponent } from './components/academic-setting/academic-setting.component';
import { ControlReportComponent } from './components/control-report/control-report.component';
import { DoctorIndexComponent } from './components/doctor/doctor-index/doctor-index.component';
import { OpenCourseComponent } from './components/open-course/open-course.component';
import { ResultTransferComponent } from './components/result-transfer/result-transfer.component';
import { StudentRegisterCourseComponent } from './components/student-register-course/student-register-course.component';
import { StudentResultIndexComponent } from './components/student-result-index/student-result-index.component';

const routes: Routes = [
  {
    path: 'plan',
    component: AcademicPlanComponent
  },
  {
    path: 'setting',
    component: AcademicSettingComponent
  },
  {
    path: 'open-course',
    component: OpenCourseComponent
  },
  {
    path: 'student-register-course',
    component: StudentRegisterCourseComponent
  },
  {
    path: 'doctors',
    component: DoctorIndexComponent
  },
  {
    path: 'student-result',
    component: StudentResultIndexComponent
  },
  {
    path: 'control-report',
    component: ControlReportComponent
  },
  {
    path: 'result-transfer',
    component: ResultTransferComponent
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
//
export class AcademicRouteModule { }
