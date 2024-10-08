import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./post/post.component";
import { AboutExtraComponent } from "./about-extra/about-extra.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

// Guard
import { AuthGuard } from "./auth.guard";

// Resolver
import { PostResolver } from "./post.resolver";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent, children:
    [
      { path: "extra", component: AboutExtraComponent },
    ]
  },
  { path: "posts", component: PostsComponent, canActivate: [AuthGuard] },
  { path: "posts/:id", component: PostComponent, resolve:
    {
      post: PostResolver
    }
  },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
