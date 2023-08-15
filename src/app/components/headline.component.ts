import { Component, Input } from '@angular/core';
import { ColorThemeService } from '../../services/color-theme.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-headline',
  templateUrl: 'headline.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
  ]
})
export class HeadlineComponent {
  @Input() public title = '';

  constructor (public colorThemeService: ColorThemeService) {}
}
