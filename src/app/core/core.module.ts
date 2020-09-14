import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {NavBarComponent} from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule {
}
