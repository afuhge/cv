import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeadlineComponent } from '../../components/headline.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    NgFor,
    CommonModule,
    HeadlineComponent,
  ]
})
export class SkillsComponent {
  public languages = ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'Java','Xtend', 'C#'];
  public frameworks = ['Angular', 'tailwindcss',  'Vue.js', 'Quasar', 'Bootstrap', 'Express.js', 'Robot Framework', '.NET', 'Vuetify'];
  constructor(public colorThemeService: ColorThemeService) {
  }

}
