import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    EducationComponent
  ],
  exports: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class EducationModule { }
