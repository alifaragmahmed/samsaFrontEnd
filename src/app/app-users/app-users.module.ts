import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UsersRoutingModule} from './users-routing.module';


@NgModule({
  declarations: [
    UsersListComponent
  ]
  ,
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class AppUsersModule {
}
