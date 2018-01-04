import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule, PageComponents } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { FooterModule } from 'meepo-footer';
import { CategoryModule } from 'meepo-category';

@NgModule({
  declarations: [
    AppComponent,
    ...PageComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FooterModule.forRoot({
      url: './assets/footer.json'
    }),
    CategoryModule.forRoot('./assets/category.json'),
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
