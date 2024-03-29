import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicComponent } from './academic.component';
import { AcademicPlanComponent } from './components/academic-plan/academic-plan.component';
import { CreateCourseFormComponent } from './components/create-course-form/create-course-form.component';
import { CreateCourseCategoryFormComponent } from './components/create-course-category-form/create-course-category-form.component';
import { CreateDegreeMapFormComponent } from './components/create-degree-map-form/create-degree-map-form.component';
import { AcademicRouteModule } from './academic-route.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSliderModule, MatSlideToggleModule, MatSortModule, MatTableModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { AcademicSettingComponent } from './components/academic-setting/academic-setting.component';
import { OpenCourseComponent } from './components/open-course/open-course.component';
import { StudentRegisterCourseComponent } from './components/student-register-course/student-register-course.component';
import { DoctorIndexComponent } from './components/doctor/doctor-index/doctor-index.component';
import { DoctorFormComponent } from './components/doctor/doctor-form/doctor-form.component';
import { StudentResultIndexComponent } from './components/student-result-index/student-result-index.component';
import { ControlReportComponent } from './components/control-report/control-report.component';
import { ResultTransferComponent } from './components/result-transfer/result-transfer.component';

@NgModule({
  declarations: [
    AcademicComponent,
    AcademicPlanComponent,
    CreateCourseFormComponent,
    CreateCourseCategoryFormComponent,
    CreateDegreeMapFormComponent,
    AcademicSettingComponent,
    OpenCourseComponent,
    DoctorIndexComponent,
    DoctorFormComponent,
    StudentResultIndexComponent,
    ControlReportComponent,
    StudentRegisterCourseComponent,
    ResultTransferComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AcademicRouteModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
  ],
  providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ]
})
export class AcademicModule { }
