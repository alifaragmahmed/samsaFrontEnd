import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { TranslationComponent } from './translation/translation.component';
import { LevelsComponent } from './levels/levels.component'
import { CaseConstraintComponent } from './case-constraint/case-constraint.component';
import { ConstraintStatusComponent } from './constraint-status/constraint-status.component';
import { LanguagesComponent } from './languages/languages.component';
import { ParentJobsComponent } from './parent-jobs/parent-jobs.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { NationalityComponent } from './nationality/nationality.component';
import { DepartmentsComponent } from './departments/departments.component';
import { RelativeRelationsComponent } from './relative-relations/relative-relations.component';
import { RegisterationStatusComponent } from './registeration-status/registeration-status.component'
import { RequiredDocumentsComponent } from './required-documents/required-documents.component'
import { CountryComponent } from './components/country/country.component';
import { AcademicYearComponent } from './components/academic-year/academic-year.component';
import { DivisionComponent } from './components/division/division.component';

const routes: Routes = [
  {
    // RegisterationMethodsModule
    path: "",
    component: SettingsComponent,
    children: [
      {
        path: 'city',
        loadChildren: './city/city.module#CityModule'
      },
      {
        path: "country",
        component: CountryComponent
      },
      {
        path: "academic-year",
        component: AcademicYearComponent
      },
      {
        path: "division",
        component: DivisionComponent
      },
      {
        path: "qualifications",
        loadChildren: './qualification/qualification.module#QualificationModule'
      },
      {
        path: "qualification-types",
        loadChildren: './qualification-types/qualification-types.module#QualificationTypesModule'
      },
      {
        path: "roles",
        loadChildren: './roles/roles.module#RolesModule'
      },
      {
        path: "registration-methods",
        loadChildren: './registeration-methods/registeration-methods.module#RegisterationMethodsModule'
      },
      {
        path: "registration-status",
        component: RegisterationStatusComponent
      },
      {
        path: "translations",
        component: TranslationComponent
      },
      {
        path: "levels",
        component: LevelsComponent
      },
      {
        path: "case-constraints",
        component: CaseConstraintComponent
      }
      ,
      {
        path: "constraint-status",
        component: ConstraintStatusComponent
      },
      {
        path: 'languages',
        component: LanguagesComponent
      }
      ,
      {
        path: 'parent-jobs',
        component: ParentJobsComponent
      },
      {
        path: 'divisions',
        component: DivisionsComponent
      },
      {
        path: 'nationalities',
        component: NationalityComponent
      },
      {
        path: 'departments',
        component: DepartmentsComponent
      },
      {
        path: 'relative-realtions',
        component: RelativeRelationsComponent
      }
      ,
      {
        path: 'required-documents',
        component: RequiredDocumentsComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
