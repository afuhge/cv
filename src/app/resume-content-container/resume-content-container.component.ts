import { Component } from '@angular/core';
import { ResumeContentHeaderComponent } from '../resume-content-header/resume-content-header.component';
import { ResumeContentComponent } from '../resume-content/resume-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-content-container',
  templateUrl: './resume-content-container.component.html',
  standalone: true,
  imports: [
    ResumeContentHeaderComponent,
    ResumeContentComponent,
    CommonModule,
  ]
})
export class ResumeContentContainerComponent {

}
