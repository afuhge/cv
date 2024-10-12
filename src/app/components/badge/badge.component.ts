import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class BadgeComponent {
@Input({required: true}) public item! : string;
}
