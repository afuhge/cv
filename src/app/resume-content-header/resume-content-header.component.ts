import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faBirthdayCake, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ColorThemeService } from '../../services/color-theme.service';

@Component({
  selector: 'app-resume-content-header',
  templateUrl: './resume-content-header.component.html',
  styleUrls: ['./resume-content-header.component.scss']
})
export class ResumeContentHeaderComponent {
  envelope: IconDefinition = faEnvelope;
  birthdayCake: IconDefinition = faBirthdayCake;
  github: IconDefinition = faGithub;

  constructor(
    public colorThemeService: ColorThemeService,
  ) {}

  // todo: quotation-marks bei en /de fixen
}
