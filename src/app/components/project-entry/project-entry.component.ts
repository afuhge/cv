import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectEntryDescriptionComponent } from '../project-entry-description/project-entry-description.component';
import { TranslateModule } from '@ngx-translate/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ProjectEntryDescriptionComponent,
    TranslateModule,
  ]
})
export class ProjectEntryComponent {

  protected readonly date = faLocationDot;
  protected readonly place = faCalendar;

  @Input({required: true}) public href!: string;
  @Input({required: true}) public companyDate!: string;
  @Input({required: true}) public title!: string;
}
