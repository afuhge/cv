import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from '../headline/headline.component';
import { ProjectEntryDescriptionComponent } from '../project-entry-description/project-entry-description.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-private-projects',
  templateUrl: './private-projects.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HeadlineComponent,
    ProjectEntryDescriptionComponent,
    TranslateModule,
  ]
})
export class PrivateProjectsComponent {

}
