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
    this.translationService.get().subscribe((r) => { 
      this.translationList = r;
    });
  }

  /**
   * update keys not exists
   */
  submitNotExistTranslation() {
    const data = Translation.getNewKeys();
    this.translationService.update(data).subscribe((r) => { 
      this.loadTranslations();
    });
  }

  /**
   * update new words
   */
  updateTranslation() { 
    this.isUpdate = true;
    this.translationService.update(this.translationList).subscribe((r) => { 
      const data: any = r;
      if (data.status == 1)
        Message.success(data.message);
      else
        Message.error(data.message);

      this.isUpdate = false;
    });
  }

}
