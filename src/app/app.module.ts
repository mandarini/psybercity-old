import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { GreecehopperComponent } from './components/greecehopper/greecehopper.component';
import { CvComponent } from './components/cv/cv.component';
import { TalksComponent } from './components/talks/talks.component';
import { MonsterComponent } from './components/monster/monster.component';
import { ErrorComponent } from './components/error/error.component';
import { TalkComponent } from './components/talks/talk/talk.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreecehopperComponent,
    CvComponent,
    TalksComponent,
    MonsterComponent,
    ErrorComponent,
    TalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
