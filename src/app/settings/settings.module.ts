import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { TranslationComponent } from './translation/translation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SettingsComponent, TranslationComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
