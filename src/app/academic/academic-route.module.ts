import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicPlanComponent } from './components/academic-plan/academic-plan.component';
import { AcademicSettingComponent } from './components/academic-setting/academic-setting.component';
import { OpenCourseComponent } from './components/open-course/open-course.component';

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