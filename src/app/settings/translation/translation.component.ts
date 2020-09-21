import { Component, OnInit } from '@angular/core';
import { Cache } from '../../shared/cache';
import { Translation } from '../../shared/translation';
import { TranslationService } from '../../shared/services/translation.service';
import { Message } from '../../shared/message';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {

  public translationList: any;
  public isUpdate = false;

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.submitNotExistTranslation();
    this.loadTranslations();
  }

  /**
   * load translations and update the cache
   */
  loadTranslations() {
    this.translationService.getList().subscribe((r) => { 
      this.translationList = r;
    });
  }

  /**
   * load translations and update the cache
   */
  loadِAppTranslations() {
    this.translationService.get().subscribe((r) => { 
      Cache.set(Translation.TRANSLATION_CACHE_KEY, r);
    });
  }

  /**
   * update keys not exists
   */
  submitNotExistTranslation() {
    if (Translation.getNewKeys())
      return;
    const data = {
      data: Translation.getNewKeys()
    };
    this.translationService.update(data).subscribe((r) => { 
      this.loadTranslations();
      //
      Cache.remove(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY);
    });
  }

  /**
   * update new words
   */
  updateTranslation() { 
    const data = {
      data: this.translationList
    };
    this.isUpdate = true;
    this.translationService.update(data).subscribe((r) => { 
      const data: any = r;
      if (data.status == 1)
        Message.success(data.message);
      else
        Message.error(data.message);

      this.isUpdate = false;
      this.loadTranslations();
      this.loadِAppTranslations();
    });
  }

}
