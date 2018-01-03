import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { FooterModule } from 'meepo-footer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FooterModule.forRoot({
      url: './assets/footer.json'
    })
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
