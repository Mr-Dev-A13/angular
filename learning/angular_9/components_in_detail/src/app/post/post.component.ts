import { Component, Input } from '@angular/core';
import { Posts } from "../app.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post?: Posts
}
