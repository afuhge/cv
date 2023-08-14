import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeComponent } from './knowledge.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    KnowledgeComponent
  ],
  exports: [
    KnowledgeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class KnowledgeModule { }
