import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Data, Router } from "@angular/router";
import { Post, PostsService } from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post | undefined = undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    // If resolver there is...
    // private postsService: PostsService
  ) {}

  ngOnInit(): void {
    // this.post = this._route.snapshot.data['post']; ---> Snapshot not return latest data.

    this._route.data.subscribe((data: Data): void => {
      this.post = data['post'];
    })

    // If resolver there is...
    // this._route.params.subscribe((params: Params) => {
    //   this.post = this.postsService.getById(parseInt(params['id']));
    // });
  }

  loadLastPost(): void {
    this._router.navigate(['posts/44']);
  }

  goBack (): void {
    this._router.navigate(['posts']);
  }
}
