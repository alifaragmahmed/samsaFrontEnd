import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {NavBarComponent} from './components/navbar/navbar.component';
import { SystemLabelComponent } from './components/system-label/system-label.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent 
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
