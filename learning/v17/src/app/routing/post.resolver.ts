import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Post, PostsService } from "./posts.service";
import { delay, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post> {
  constructor(private postsService: PostsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> | Promise<Post> | Post {
    return of(
      route.params['id'] && this.postsService.getById(parseInt(route.params['id']))
    ).pipe(delay(2000));
  }
}
