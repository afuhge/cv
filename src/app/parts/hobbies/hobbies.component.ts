import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HeadlineComponent } from '../../components/headline.component';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    HeadlineComponent,
  ]
})
export class HobbiesComponent {

  constructor(public colorThemeService: ColorThemeService) {
  }

}
