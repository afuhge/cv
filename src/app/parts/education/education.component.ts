import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    FontAwesomeModule,
    CommonModule,
  ]
})
export class EducationComponent {
  public date = faLocationDot;
  public place = faCalendar;

  constructor(public colorThemeService: ColorThemeService) {
  }

}
