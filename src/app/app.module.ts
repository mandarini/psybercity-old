import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HomeComponent } from "./components/home/home.component";
import { GreecehopperComponent } from "./components/greecehopper/greecehopper.component";
import { CvComponent } from "./components/cv/cv.component";
import { TalksComponent } from "./components/talks/talks.component";
import { MonsterComponent } from "./components/monster/monster.component";
import { ErrorComponent } from "./components/error/error.component";
import { TalkComponent } from "./components/talks/talk/talk.component";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { StreamsComponent } from './components/streams/streams.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreecehopperComponent,
    CvComponent,
    TalksComponent,
    MonsterComponent,
    ErrorComponent,
    TalkComponent,
    StreamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [
    {
      provide: "externalUrlRedirectResolver",
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
