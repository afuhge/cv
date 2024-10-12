import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {
  faBirthdayCake,
  faEnvelope,
  faLocationDot,
  faQuoteLeft,
  faQuoteRight
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ColorThemeService } from '../../services/color-theme.service';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-resume-content-header',
  templateUrl: './resume-content-header.component.html',
  standalone: true,
  imports: [
    TranslateModule,
    AsyncPipe,
    FontAwesomeModule,
    CommonModule,
  ]
})
export class ResumeContentHeaderComponent {
  envelope: IconDefinition = faEnvelope;
  place: IconDefinition = faLocationDot;
  github: IconDefinition = faGithub;

  constructor(
    public colorThemeService: ColorThemeService,
  ) {}
}
