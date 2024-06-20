import { Component } from '@angular/core';

import {NgFor, NgIf} from "@angular/common";

import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { PostFormComponent } from "./post-form/post-form.component";

export interface Post {
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
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components_in_detail';
  posts: Array<Post> = [
    {id: 1, title: "Component", text: "Angular components are work!"},
    {id: 2, title: "Parameters", text: "Angular parameters are work!"},
  ];

  updatePosts (post: Post) {
    this.posts.unshift(post);
  }

  removePost (id: number): void {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
