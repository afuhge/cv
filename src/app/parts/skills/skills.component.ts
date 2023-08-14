import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule, NgFor, NgForOf } from '@angular/common';
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
  constructor(public colorThemeService: ColorThemeService) {
  }

}
