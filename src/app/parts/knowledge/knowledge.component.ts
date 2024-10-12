import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeadlineComponent } from '../../components/headline/headline.component';
import { BadgeComponent } from '../../components/badge/badge.component';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    CommonModule,
    HeadlineComponent,
    BadgeComponent,
  ]
})
export class KnowledgeComponent {
    public skills = ['Git', 'npm', 'MongoDB', 'Node.js', 'CI/CD', 'Figma', 'ESLint', 'Docker', 'Cypress','Jira', 'Confluence'];
    constructor(
      public colorThemeService: ColorThemeService,
    ) {
    }
}
