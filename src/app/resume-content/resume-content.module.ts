import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeContentComponent } from './resume-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorkExperienceModule } from '../parts/work-experience/work-experience.module';
import { KnowledgeModule } from '../parts/knowledge/knowledge.module';
import { EducationModule } from '../parts/education/education.module';
import { HobbiesModule } from '../parts/hobbies/hobbies.module';
import { SkillsModule } from '../parts/skills/skills.module';

@NgModule({
  declarations: [
    ResumeContentComponent
  ],
  exports: [
    ResumeContentComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    WorkExperienceModule,
    KnowledgeModule,
    EducationModule,
    HobbiesModule,
    SkillsModule
  ]
})
export class ResumeContentModule {}
