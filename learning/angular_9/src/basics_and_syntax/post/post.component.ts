import { Component } from "@angular/core";
import { NgPostComponent } from "../ng-post/ng-post.component";
import { TitleComponent } from "./title/title.component";
import {NgIf} from "@angular/common";

@Component({
  selector: "b_and_s-post",
  standalone: true,
  imports: [NgPostComponent, TitleComponent, NgIf],
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.scss",
  // styleUrls: ["./post.component.scss"],
})

export class PostComponent {
  hideText = true;
}
