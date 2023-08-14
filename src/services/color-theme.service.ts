import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageHelperService } from './local-storage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {
  public isDarkTheme$: Observable<boolean> = new Observable<boolean>();
  private isDarkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private localStorageService: LocalStorageHelperService,
  ) {
    this.isDarkTheme$ = this.isDarkThemeSubject.asObservable();

    if (this.localStorageService.getThemeItem() === 'light') {
     this.setLightTheme();
    } else if (this.localStorageService.getThemeItem() === 'dark') {
     this.setDarkTheme();
    } else {
      this.setLightTheme(); // default theme
    }
  }

  public setLightTheme(): void {
    document.documentElement.classList.remove('dark');
    this.isDarkThemeSubject.next(false);
    this.localStorageService.setThemeItem('light');
  }

  public setDarkTheme(): void {
    document.documentElement.classList.add('dark');
    this.isDarkThemeSubject.next(true);
    this.localStorageService.setThemeItem('dark');
  }

}
