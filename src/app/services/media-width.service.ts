import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MediaWidthService {
  constructor() {}

  getTypeOfDevice(): "small" | "large" {
    if (window.innerWidth <= 550) {
      return "small";
    } else {
      return "large";
    }
  }
}
