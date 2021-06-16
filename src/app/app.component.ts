import { Component } from "@angular/core";
import { MediaWidthService } from "./services/media-width.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "psybercity";
  width = this.mediaWidth.getTypeOfDevice();
  constructor(public mediaWidth: MediaWidthService) {}
}
