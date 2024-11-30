import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeadlineComponent } from '../../components/headline/headline.component';
import { Entry } from '../../../types/ContentEntry';
import { ContentEntryComponent } from '../../components/content-entry/content-entry.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    FontAwesomeModule,
    CommonModule,
    HeadlineComponent,
    ContentEntryComponent,
  ]
})
export class EducationComponent {
  public date = faLocationDot;

  public master: Entry = {
    company: {
      title: 'resume.content.education.master.company',
      href: 'https://www.tu-dortmund.de/'
    },
    date: 'resume.content.education.master.date',
    title: 'resume.content.education.master.title',
    grade: '1.3'
  }

  public bachelor: Entry = {
    ...this.master,
    date: 'resume.content.education.bachelor.date',
    title: 'resume.content.education.bachelor.title',
    grade: '2.2'
  }

  constructor(public colorThemeService: ColorThemeService) {
  }

}
