import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { ResumeContentContainerComponent } from './resume-content-container/resume-content-container.component';
import { ContentEntryComponent } from './components/content-entry/content-entry.component';
import { HashtagListComponent } from './components/hashtag-list/hashtag-list.component';
import { BadgeComponent } from './components/badge/badge.component';


export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): string {
    return `missing key: ${params}`;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
    }),
    HeaderComponent,
    ResumeContentContainerComponent,
    HashtagListComponent,
    BadgeComponent,
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
