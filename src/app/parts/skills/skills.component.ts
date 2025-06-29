import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeadlineComponent } from '../../components/headline/headline.component';
import { BadgeComponent } from '../../components/badge/badge.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    NgFor,
    CommonModule,
    HeadlineComponent,
    BadgeComponent,
  ]
})
export class SkillsComponent {
  public languages = ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'Java','Xtend', 'Kotlin', 'C#',];
  public frameworks = ['Angular', 'tailwindcss',  'Vue.js', 'Quasar', 'Robot Framework', 'Bootstrap','Spring Boot', '.NET', 'Vuetify', 'NestJS', 'Express.js', 'Cypress', 'Jest'];
  constructor(public colorThemeService: ColorThemeService) {
  }

}
