import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { TranslationComponent } from './translation/translation.component';

@NgModule({
  declarations: [SettingsComponent, TranslationComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
