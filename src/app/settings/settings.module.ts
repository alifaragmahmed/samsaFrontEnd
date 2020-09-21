import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { TranslationComponent } from './translation/translation.component';
import { SharedModule } from '../shared/shared.module';
import { LevelsComponent } from './levels/levels.component';

@NgModule({
  declarations: [SettingsComponent, TranslationComponent, LevelsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    DataTablesModule
  ],exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
