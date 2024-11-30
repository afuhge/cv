import { Component } from '@angular/core';
import { ColorThemeService } from '../../../services/color-theme.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeadlineComponent } from '../../components/headline/headline.component';
import { HashtagListComponent } from '../../components/hashtag-list/hashtag-list.component';
import { Entry } from '../../../types/ContentEntry';
import { ContentEntryComponent } from '../../components/content-entry/content-entry.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    TranslateModule,
    HeadlineComponent,
    HashtagListComponent,
    ContentEntryComponent,
  ]
})
export class WorkExperienceComponent {
  private ecostagSkills: string[] = ['Vue.js', 'JavaScript', 'Quasar'];
  private douglasSkills: string[] = ['Angular', 'TypeScript', 'tailwindcss', 'Robot Framework', 'MongoDB', '.NET']

  public ecostag: Entry = {
    company: {
      title: 'resume.content.work-experience.ecostag.company',
      href: 'https://about.stagedates.com/'
    },
    date: 'resume.content.work-experience.ecostag.date',
    skills: this.ecostagSkills,
    title: 'resume.content.work-experience.ecostag.title',
    description: 'resume.content.work-experience.ecostag.description'
  }

  public douglas: Entry = {
    company: {
      title: 'resume.content.work-experience.douglas.company',
      href: 'https://corporate.douglas.de/home/'
    },
    date: 'resume.content.work-experience.douglas.date',
    skills: this.douglasSkills,
    title: 'resume.content.work-experience.douglas.title',
    description: 'resume.content.work-experience.douglas.description'
  }

  public wimi: Entry = {
    company: {
      title: 'resume.content.work-experience.tu-dortmund-wimi.company',
      href: 'https://www.tu-dortmund.de/'
    },
    date: 'resume.content.work-experience.tu-dortmund-wimi.date',
    title: 'resume.content.work-experience.tu-dortmund-wimi.title',
    description: 'resume.content.work-experience.tu-dortmund-wimi.description'
  }

  public shk: Entry = {
    company: {
      title: 'resume.content.work-experience.tu-dortmund-wimi.company',
      href: 'https://www.tu-dortmund.de/'
    },
    date: 'resume.content.work-experience.tu-dortmund.date',
    title: 'resume.content.work-experience.tu-dortmund.title',
  }


  constructor(public colorThemeService: ColorThemeService,
  ) {}


}
