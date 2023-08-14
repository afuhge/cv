import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    CommonModule,
  ]
})
export class KnowledgeComponent {

    constructor(
      public colorThemeService: ColorThemeService,
    ) {
    }
}
