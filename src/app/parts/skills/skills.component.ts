import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
  ]
})
export class SkillsComponent {
  public languages = ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'Java','Xtend', 'C#'];
  public frameworks = ['Angular', 'tailwindcss', 'Bootstrap', 'Robot Framework', '.NET', 'Vue.js', 'Vuetify', 'Express.js'];
  constructor(public colorThemeService: ColorThemeService) {
  }

}
