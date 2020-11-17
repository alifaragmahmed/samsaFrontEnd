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

  $: any = $;
  datatable: any = null;
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
      this.loadDataTable();
    });
  }

  /**
   * load translations and update the cache
   */
  loadِAppTranslations() {
    this.translationService.get().subscribe((r) => {
      Cache.remove(Translation.TRANSLATION_CACHE_KEY);
      Cache.set(Translation.TRANSLATION_CACHE_KEY, r);
    });
  }

  /**
   * update keys not exists
   */
  submitNotExistTranslation() {
    if (!Translation.getNewKeys())
      return;
    const data = {
      data: Translation.getNewKeys(),
      not_exist: 1
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
    let changedWord = [];
    this.translationList.forEach(element => {
      if (element.changed == 1) {
        element.value = null;
        changedWord.push(element);
      }
    });
    const data = {
      data: changedWord
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

  loadDataTable() {
    return;
    if (this.datatable) {
      this.datatable.destroy();
    }
      var _this = this;
      setTimeout(() => {
        _this.datatable = _this.$('#tableTrans').DataTable({
          "paging": false,
          //"pageLength": 10,
          dom: 'Bfrtip',
          "language": {
              "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json"
          },
      });
      }, 500);

  }

}
