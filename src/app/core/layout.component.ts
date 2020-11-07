import {AfterViewChecked, Component, Inject, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
import { Auth } from '../shared/auth';
import { Router } from '../../../node_modules/@angular/router';
import { TranslationService } from '../shared/services/translation.service';
import { TermService } from '../account/services/term.service';
import { DivisionService } from '../account/services/division.service';
import { LevelService } from '../account/services/level.service';
import { ApplicationSettingService } from '../adminision/services/application-setting.service';
import { Translation } from '../shared/translation';
import { Cache } from '../shared/cache';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements AfterViewChecked  ,OnInit, OnChanges{

  constructor(@Inject(DOCUMENT)
  private document: Document,
  private router: Router,
  private translationService: TranslationService,
  private levelService: LevelService,
  private termService: TermService,
  private divisionService: DivisionService,
  private applicationSettingService: ApplicationSettingService) {
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      // this.document.getElementById('start-loader').remove();
    }, 1500);
  }

  watchUser() {
    console.log(Auth.getApiToken());
    if (!Auth.getApiToken())
      this.router.navigate(['/login'], {
      }).then().catch();
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.watchUser();
  }

  init() {
    // load the translations words
    this.loadTranslations();
    this.loadLevels();
    this.loadDivisions();
    this.loadTerms();
    this.applicationSettingService.loadSettings();
  }

  /**
   * load translations and update the cache
   */
  loadTranslations() {
    this.translationService.get().subscribe((r) => {
      Cache.remove(Translation.TRANSLATION_CACHE_KEY);
      Cache.set(Translation.TRANSLATION_CACHE_KEY, r);
    });
  }

  /**
   * load levels and update the cache
   */
  loadLevels() {
    this.levelService.get().subscribe((r) => {
      Cache.remove(LevelService.LEVEL_PREFIX);
      Cache.set(LevelService.LEVEL_PREFIX, r);
    });
  }

  /**
   * load divisions and update the cache
   */
  loadDivisions() {
    this.divisionService.get().subscribe((r) => {
      Cache.remove(DivisionService.DIVISION_PREFIX);
      Cache.set(DivisionService.DIVISION_PREFIX, r);
    });
  }

  /**
   * load terms and update the cache
   */
  loadTerms() {
    this.termService.get().subscribe((r) => {
      Cache.remove(TermService.TERPM_PREFIX);
      Cache.set(TermService.TERPM_PREFIX, r);
    });
  }


}
