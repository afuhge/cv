import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageHelperService } from './local-storage-helper.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private translate: TranslateService,
    private localStorageHelper: LocalStorageHelperService,
  ) {
    if (localStorageHelper.getLanguageItem()) {
      translate.use(localStorageHelper.getLanguageItem());
    } else {
      translate.use('de_DE');
    }
  }

  public setLanguage(language: string): void {
    this.localStorageHelper.setLanguageItem(language);
    this.translate.use(language);
  }

  public getLanguage(): string {
    if (this.localStorageHelper.getLanguageItem()) {
     return this.localStorageHelper.getLanguageItem();
    } else {
      return 'de_DE';
    }
  }
}
