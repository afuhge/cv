import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements  OnInit{
  constructor(private meta: Meta, private translateService: TranslateService, private titleService: Title) {
    }

    ngOnInit (): void {
      this.translateService.get(['']).subscribe((translations: string[]) => {
        this.meta.addTag({ name: 'title', content: this.translateService.instant('title') });
        this.meta.addTag({ name: 'description', content: this.translateService.instant('title') + ' - Annika Fuhge' });
        this.meta.addTag({ name: 'keywords', content: `${this.translateService.instant('title')}, ${this.translateService.instant('resume.header.title')}, HTML, CSS, JavaScript, TypeScript, Angular, Vue.js, tailwindcss, Bootstrap, Quasar, Vuetify, Git, npm, Jira, Confluence, Figma` });
        this.meta.addTag({ name: 'author', content: 'Annika Fuhge' });

        this.titleService.setTitle(this.translateService.instant('title') + ' - Annika Fuhge')
      })
    }
}
