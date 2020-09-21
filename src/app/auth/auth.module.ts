import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from '../shared/shared.module';
import { TransPipe } from '../shared/pipes/trans.pipe';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    TransPipe,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
