import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {
    isDarkTheme = false;

    constructor(
      private colorThemeService: ColorThemeService,
    ) {
      this.colorThemeService.isDarkTheme$.subscribe((isDark: boolean) => {
        this.isDarkTheme = isDark;
      });
    }
}
