import { Component } from '@angular/core';
import { faCalendar, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeadlineComponent } from '../../components/headline.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    TranslateModule,
    FontAwesomeModule,
    CommonModule,
    HeadlineComponent,
  ]
})
export class WorkExperienceComponent {
  public date: IconDefinition = faLocationDot;
  public place: IconDefinition = faCalendar;

  constructor(public colorThemeService: ColorThemeService,
  ) {}


}
