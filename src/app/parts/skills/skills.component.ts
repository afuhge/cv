import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  isDarkTheme = false;
  constructor(private colorThemeService: ColorThemeService) {
    this.colorThemeService.isDarkTheme$.subscribe((isDark: boolean) => {
      this.isDarkTheme = isDark;
    });
  }

}
