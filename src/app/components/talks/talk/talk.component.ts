import { Component, OnInit, Input } from "@angular/core";
import { Talk } from "src/app/objects/merged-talk";

@Component({
  selector: "app-talk",
  templateUrl: "./talk.component.html",
  styleUrls: ["./talk.component.scss"],
})
export class TalkComponent implements OnInit {
  @Input() talk: Talk;
  @Input() id_talk: number;

  constructor() {}

  ngOnInit() {}
}
