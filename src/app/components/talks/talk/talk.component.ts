import { Component, OnInit, Input } from "@angular/core";
import { KeyValue } from "@angular/common";

@Component({
  selector: "app-talk",
  templateUrl: "./talk.component.html",
  styleUrls: ["./talk.component.scss"]
})
export class TalkComponent implements OnInit {
  @Input() talk: {};
  @Input() id_talk: number;
  @Input() talk_key: string;

  constructor() {}

  ngOnInit() {}
}
