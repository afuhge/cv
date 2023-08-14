import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faLanguage, faMoon, faPrint, faSun } from '@fortawesome/free-solid-svg-icons';
import { ColorThemeService } from '../../services/color-theme.service';
import { LanguageService } from '../../services/language.service';
import { LocalStorageHelperService } from '../../services/local-storage-helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  print: IconDefinition = faPrint;
  sun: IconDefinition = faSun;
  language: IconDefinition = faLanguage;
  isGerman = true;
  moon: IconDefinition = faMoon;
  isDarkTheme = false;

  constructor(
    private colorThemeService: ColorThemeService,
    private languageService: LanguageService,
    private localStorageHelper: LocalStorageHelperService,
  ) {
  }

  public ngOnInit(): void {
    this.colorThemeService.isDarkTheme$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
      this.initColorToggle();
    });

    this.isGerman = this.localStorageHelper.getLanguageItem() === 'de_DE';
  }

  public printResume(): void {
    window.print();
  }

  public switchTheme(): void {
    const slider = document.getElementById('slider');
    const container = document.getElementById('container');
    if (!this.isDarkTheme) {
      // switch to dark
      slider?.classList.add('translate-x-6');
      slider?.classList.add('dark-slider');
      container?.classList.add('dark-slider-container');

      container?.classList.remove('light-slider-container');
      slider?.classList.remove('light-slider');

      this.colorThemeService.setDarkTheme();
    } else {
      slider?.classList.add('light-slider');
      container?.classList.add('light-slider-container');

      slider?.classList.remove('translate-x-6');
      slider?.classList.remove('dark-slider');
      container?.classList.remove('dark-slider-container');

      this.colorThemeService.setLightTheme();
    }
    slider?.classList.add('transition');
    slider?.classList.add('ease-in');
    slider?.classList.add('duration-200');
  }

  public changeLanguage(language: string): void {
    this.languageService.setLanguage(language);
    this.isGerman = this.localStorageHelper.getLanguageItem() === 'de_DE';
  }

  private initColorToggle(): void {
    const slider = document.getElementById('slider');
    const container = document.getElementById('container');
    if (!this.isDarkTheme) {
      slider?.classList.add('light-slider');
      container?.classList.add('light-slider-container');

      slider?.classList.remove('translate-x-6');
      slider?.classList.remove('dark-slider');
      container?.classList.remove('dark-slider-container');
    } else {
      // switch to dark
      slider?.classList.add('translate-x-6');
      slider?.classList.add('dark-slider');
      container?.classList.add('dark-slider-container');

      container?.classList.remove('light-slider-container');
      slider?.classList.remove('light-slider');
    }
    slider?.classList.add('transition');
    slider?.classList.add('ease-in');
    slider?.classList.add('duration-200');
  }
}
