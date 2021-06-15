import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CvComponent } from "./components/cv/cv.component";
import { GreecehopperComponent } from "./components/greecehopper/greecehopper.component";
import { MonsterComponent } from "./components/monster/monster.component";
import { TalksComponent } from "./components/talks/talks.component";

const routes: Routes = [
  {
    path: "🐈",
    component: HomeComponent
  },
  {
    path: "cv",
    component: CvComponent
  },
  {
    path: "greecehopperJs",
    component: GreecehopperComponent
  },
  {
    path: "monster",
    component: MonsterComponent
  },
  {
    path: "talks",
    component: TalksComponent
  },
  { path: "**", redirectTo: "/🐈", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
