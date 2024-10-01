import { Component, OnInit } from '@angular/core'
import { PostsService } from '../posts.service'
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showIds: boolean = false;

  constructor(
    public postsService: PostsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((params: Params): void => {
      this.showIds = !!params['showIds'];
    });

    this._route.fragment.subscribe((fragment: string | null): void => {
      // Fragment context...
    })
  }

  onShowIdsHandler (): void {
    this._router.navigate(["posts"], {
      queryParams: {
        showIds: true
      },
      fragment: "program-fragment"
    })
  }
}
