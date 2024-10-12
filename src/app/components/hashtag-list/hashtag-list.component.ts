import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hashtag-list',
  templateUrl: './hashtag-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class HashtagListComponent {
 @Input() public skills: string[] = [];
}
