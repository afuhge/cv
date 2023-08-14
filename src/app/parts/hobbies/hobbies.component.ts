import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
})
export class HobbiesComponent {
  isDarkTheme = false;

  constructor(private colorThemeService: ColorThemeService) {
    this.colorThemeService.isDarkTheme$.subscribe((isDark: boolean) => {
      this.isDarkTheme = isDark;
    });
  }

}
