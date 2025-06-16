import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HeadlineComponent } from '../../components/headline/headline.component';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HashtagListComponent } from '../../components/hashtag-list/hashtag-list.component';
import { Entry } from '../../../types/ContentEntry';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  ProjectEntryDescriptionComponent
} from '../../components/project-entry-description/project-entry-description.component';
import { ProjectEntryComponent } from '../../components/project-entry/project-entry.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    HeadlineComponent,
    TranslateModule,
    FontAwesomeModule,
    HashtagListComponent,
    ProjectEntryDescriptionComponent,
    ProjectEntryComponent,
  ]
})
export class ProjectsComponent {
  public date = faLocationDot;

  public cgm: Entry = {
    company: {
      title: 'resume.content.work-experience.cgm.company',
      href: 'https://www.cgm.com/'
    },
    date: 'resume.content.work-experience.cgm.date',
  };

  public ecostag: Entry = {
    company: {
      title: 'resume.content.work-experience.ecostag.company',
      href: 'https://about.stagedates.com/'
    },
    date: 'resume.content.work-experience.ecostag.date',
  };

  public douglas: Entry = {
    company: {
      title: 'resume.content.work-experience.douglas.company',
      href: 'https://corporate.douglas.de/home/'
    },
    date: 'resume.content.work-experience.douglas.date',
  }

  public university: Entry = {
    company: {
      title: 'resume.content.education.master.company',
      href: 'https://www.tu-dortmund.de/'
    },
    date: 'resume.content.education.university.date',
  }
}
