import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';

@Component({
  selector: 'app-project-entry-description',
  templateUrl: './project-entry-description.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class ProjectEntryDescriptionComponent {
  @Input({required: true}) public projectTitle!: string;
  @Input() public repo?: string;
  @Input() public website?: string;

  protected readonly link = faLink;
}
