import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { Post } from "../app.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  // Static default is false.
  @ContentChild("postInfoRef", {static: true}) postInfoRef?: ElementRef;

  ngOnInit() {
    // console.log(this.postInfoRef?.nativeElement)
  }

}
