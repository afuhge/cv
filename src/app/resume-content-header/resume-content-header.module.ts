import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeContentHeaderComponent } from './resume-content-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ResumeContentHeaderComponent
  ],
  exports: [
    ResumeContentHeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class ResumeContentHeaderModule {}
