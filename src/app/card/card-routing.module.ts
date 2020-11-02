import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CardComponent } from './card.component';
import { CardExportReportComponent } from './components/report/card-export-report/card-export-report.component';

const routes: Routes = [
   {
    path: "",
    component: null,
    children: [
      {
        path: '',
        component: CardComponent
      },
      {
        path: 'report/card-export',
        component: CardExportReportComponent
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
export class CardRoutingModule {
}
