import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout.component';
import { AuthGuardService } from './shared/middlewares/auth-guard.service';
import { AuthComponent } from './core/auth.component';
import { AuthGuestService } from './shared/middlewares/auth-guest.service';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
      },
     /* {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },

      {
        path: 'admin-users',
        loadChildren: './admin-users/admin-users.module#AdminUsersModule'
      },
      {
        path: 'app-users',
        loadChildren: './app-users/app-users.module#AppUsersModule'
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        // redirectTo: 'dashboard',
        pathMatch: 'full'
      }*/
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    // redirectTo: 'admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
