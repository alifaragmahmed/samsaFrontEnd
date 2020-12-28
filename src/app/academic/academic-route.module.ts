import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from '../shared/auth';
import { AuthGuestService } from '../shared/middlewares/auth-guest.service';
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
    canActivate: [AuthGuestService],
    data: {can: Auth.canOr(['course_read', 'course_category_read', 'degree_map_read'])},
    component: AcademicPlanComponent
  },
  {
    path: 'setting',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('academic_setting')},
    component: AcademicSettingComponent
  },
  {
    path: 'open-course',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('open_course')},
    component: OpenCourseComponent
  },
  {
    path: 'student-register-course',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('student_register')},
    component: StudentRegisterCourseComponent
  },
  {
    path: 'doctors',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('doctor_read')},
    component: DoctorIndexComponent
  },
  {
    path: 'student-result',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('control')},
    component: StudentResultIndexComponent
  },
  {
    path: 'control-report',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('control_report')},
    component: ControlReportComponent
  },
  {
    path: 'result-transfer',
    canActivate: [AuthGuestService],
    data: {can: Auth.can('result_transfer')},
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
