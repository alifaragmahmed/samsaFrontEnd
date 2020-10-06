import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { RoleIndexComponent } from './components/role/role-index/role-index.component';
import { UserIndexComponent } from './components/user/user-index/user-index.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserIndexComponent
      },
      {
        path: 'role',
        component: RoleIndexComponent
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
export class UserRoutingModule {
}
