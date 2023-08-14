import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
  ]
})
export class HobbiesComponent {

  constructor(public colorThemeService: ColorThemeService) {
  }

}
