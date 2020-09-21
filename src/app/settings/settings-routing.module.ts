import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { TranslationComponent } from './translation/translation.component';
import { LevelsComponent } from './levels/levels.component'
import { CaseConstraintComponent } from './case-constraint/case-constraint.component';
import { ConstraintStatusComponent } from './constraint-status/constraint-status.component';


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
        loadChildren: './country/country.module#CountryModule'
      },
      {
        path: "government",
        loadChildren: './government/government.module#GovernmentModule'
      },
      {
        path: "academic-year",
        loadChildren: './academic-year/academic-year.module#AcademicYearModule'
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
        path: "registration-methods",
        loadChildren: './registeration-methods/registeration-methods.module#RegisterationMethodsModule'
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
