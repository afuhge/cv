import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeContentContainerComponent } from './resume-content-container.component';
import { ResumeContentHeaderModule } from '../resume-content-header/resume-content-header.module';
import { ResumeContentModule } from '../resume-content/resume-content.module';

@NgModule({
  declarations: [
    ResumeContentContainerComponent
  ],
  exports: [
    ResumeContentContainerComponent
  ],
  imports: [
    CommonModule,
    ResumeContentHeaderModule,
    ResumeContentModule
  ]
})
export class ResumeContentContainerModule {}
