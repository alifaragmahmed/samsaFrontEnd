import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component'
const routes: Routes = [
  {
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
