import { AppModule } from '../app.module';
import { Translation } from './translation';
import { Router } from '../../../node_modules/@angular/router';

export class Helper {


  public static refreshComponent(router: Router, url) {
    router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      router.navigate([url]);
    });
    setTimeout(() => {
      AppModule.doc.jquery('.modal-backdrop fade in').remove();
    }, 1000);
  }

  /**
   * translate word
   *
   * @param word
   */
  public static trans(word: string) {
    word = word.replace(/\s/g, '_');
    word = word.toLocaleLowerCase();
    // load translations from cache
    const transWord = Translation.getTranslationsData()[word];

    if (transWord) {
      return transWord['name_'+Translation.getLang()];
    }
    Translation.storeNewKey(word);
    return word;
  }


  public static setFile(event, key, model) {
    model[key] = event.target.files[0];
  }

  public static loadImage(event, key, model) {
    Helper.setFile(event, key, model);
    var reader = new FileReader();
    reader.readAsDataURL(model[key]);
    reader.onload = (_event) => {
      model[key+"_url"] = reader.result;
    }
  }
}
