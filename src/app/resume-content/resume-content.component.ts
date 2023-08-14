import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {  faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ColorThemeService } from '../../services/color-theme.service';

@Component({
  selector: 'app-resume-content',
  templateUrl: './resume-content.component.html',
  styleUrls: ['./resume-content.component.scss']
})
export class ResumeContentComponent {
  isDarkTheme = false;
  constructor(private colorThemeService: ColorThemeService) {
    this.colorThemeService.isDarkTheme$.subscribe((isDark: boolean) => {
      this.isDarkTheme = isDark;
    });
  }

}
