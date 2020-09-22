import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { TranslationComponent } from './translation/translation.component';
import { SharedModule } from '../shared/shared.module';
import { LevelsComponent } from './levels/levels.component';
import { CaseConstraintComponent } from './case-constraint/case-constraint.component';
import { ConstraintStatusComponent } from './constraint-status/constraint-status.component';
import { LanguagesComponent } from './languages/languages.component';
import { ParentJobsComponent } from './parent-jobs/parent-jobs.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { NationalityComponent } from './nationality/nationality.component';
import { DepartmentsComponent } from './departments/departments.component';

@NgModule({
  declarations: 
  [
    SettingsComponent,
     TranslationComponent,
      LevelsComponent,
     CaseConstraintComponent,
      ConstraintStatusComponent, 
      LanguagesComponent, ParentJobsComponent, DivisionsComponent, NationalityComponent, DepartmentsComponent
    ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    DataTablesModule
  ],exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
