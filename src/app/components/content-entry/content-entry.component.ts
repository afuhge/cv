import { Component, Input } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Entry } from '../../../types/ContentEntry';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HashtagListComponent } from '../hashtag-list/hashtag-list.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-content-entry',
  templateUrl: './content-entry.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    HashtagListComponent,
    TranslateModule
  ]
})
export class ContentEntryComponent {
  @Input({required: true}) public entry!: Entry;

  protected readonly place = faCalendar;
  protected readonly date = faLocationDot;
}
