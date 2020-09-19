import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from './shared/interceptors';
import { SharedModule } from './shared/shared.module';
import { AuthGuestService } from './shared/middlewares/auth-guest.service';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthService } from './shared/services/auth.service';
import { LayoutComponent } from './core/layout.component';
import { AppComponent } from './core/app.component';
import { AuthComponent } from './core/auth.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { TranslationService } from './shared/services/translation.service';
import { Cache } from './shared/cache';
import { Translation } from './shared/translation';
import { LevelService } from './account/services/level.service';
import { DivisionService } from './account/services/division.service';

@NgModule({
  declarations: [
    LayoutComponent,
    AuthComponent,
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
      progressBar: true,
      closeButton: true,
      enableHtml: true,
    }),
    AppRoutingModule,

  ],
  providers: [
    httpInterceptorProviders,
    AuthService,
    AuthGuestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 

  constructor(
    private translationService: TranslationService,
    private levelService: LevelService,
    private divisionService: DivisionService) {
    this.init();
  }

  init() {
    // load the translations words
    this.loadTranslations();
    this.loadLevels();
    this.loadDivisions();
  }

  /**
   * load translations and update the cache
   */
  loadTranslations() {
    this.translationService.get().subscribe((r) => { 
      Cache.set(Translation.TRANSLATION_CACHE_KEY, r);
    });
  }
  
  /**
   * load levels and update the cache
   */
  loadLevels() {
    this.levelService.get().subscribe((r) => { 
      Cache.set(LevelService.LEVEL_PREFIX, r);
    });
  }
  
  /**
   * load divisions and update the cache
   */
  loadDivisions() {
    this.divisionService.get().subscribe((r) => { 
      Cache.set(DivisionService.DIVISION_PREFIX, r);
    });
  }
}
