import { Component } from '@angular/core';

import { NgFor } from "@angular/common";

import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { PostFormComponent } from "./post-form/post-form.component";

export interface Posts {
  id?: number | string,
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PostComponent,
    PostFormComponent,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components_in_detail';
  posts: Array<Posts> = [
    {id: 1, title: "Component", text: "Angular components are work!"},
    {id: 2, title: "Parameters", text: "Angular parameters are work!"},
  ]
}
