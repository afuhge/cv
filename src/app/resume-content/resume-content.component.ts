import { Component } from '@angular/core';
import { ColorThemeService } from '../../services/color-theme.service';
import { WorkExperienceComponent } from '../parts/work-experience/work-experience.component';
import { EducationComponent } from '../parts/education/education.component';
import { SkillsComponent } from '../parts/skills/skills.component';
import { KnowledgeComponent } from '../parts/knowledge/knowledge.component';
import { HobbiesComponent } from '../parts/hobbies/hobbies.component';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-content',
  templateUrl: './resume-content.component.html',
  standalone: true,
  imports: [
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    KnowledgeComponent,
    HobbiesComponent,
    AsyncPipe,
    CommonModule,
  ]
})
export class ResumeContentComponent {
  constructor(public colorThemeService: ColorThemeService) {
  }

}
