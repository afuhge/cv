import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-entry-description',
  templateUrl: './project-entry-description.component.html',
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class ProjectEntryDescriptionComponent {
  @Input({required: true}) public projectTitle!: string;
}
