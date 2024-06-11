import { Component } from "@angular/core";
import { NgPostComponent } from "../ng-post/ng-post.component";
import { TitleComponent } from "./title/title.component";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [NgPostComponent, TitleComponent],
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.scss",
  // styleUrls: ["./post.component.scss"],
})

export class PostComponent {}
