import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component'
const routes: Routes = [
  // {
  //   path: 'city',
  //   loadChildren: './city/city.module#CityModule'
  // },
  //
  // {
  //   path: 'country',
  //   loadChildren: './country/country.module#CountryModule'
  // },
  // {
  //   path: '',
  //   component: SettingsComponent
  //   },
  {
    path: "",
    component: SettingsComponent,
    children: [
      {
        path: "country",
        loadChildren: './country/country.module#CountryModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
