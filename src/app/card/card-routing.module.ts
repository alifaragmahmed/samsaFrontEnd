import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CardComponent } from './card.component';

const routes: Routes = [
   {
    path: "",
    component: CardComponent,
    children: [
      {
        path: 'students',
        component: null
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
