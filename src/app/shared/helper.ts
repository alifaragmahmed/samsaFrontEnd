import { AppModule } from '../app.module';
import { Translation } from './translation';

export class Helper {

  

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
}
