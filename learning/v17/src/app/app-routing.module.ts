import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// For Routing ===>
// import { HomeComponent } from "./routing/home/home.component";
// import { AboutComponent } from "./routing/about/about.component";
// import { PostsComponent } from "./routing/posts/posts.component";
// import { PostComponent } from "./routing/post/post.component";
// import { AboutExtraComponent } from "./routing/about-extra/about-extra.component";
// import { ErrorPageComponent } from "./routing/error-page/error-page.component";
// For Modules ===>
import { HomePageComponent } from "./modules/home-page/home-page.component";

// Guard
// import { AuthGuard } from "./routing/auth.guard";

// Resolver
// import { PostResolver } from "./routing/post.resolver";


const routes: Routes = [
  // For Routing ===>
  // { path: "", component: HomeComponent },
  // { path: "about", component: AboutComponent, children:
  //   [
  //     { path: "extra", component: AboutExtraComponent },
  //   ]
  // },
  // { path: "posts", component: PostsComponent, canActivate: [AuthGuard] },
  // { path: "posts/:id", component: PostComponent, resolve:
  //   {
  //     post: PostResolver
  //   }
  // },
  // { path: "**", component: ErrorPageComponent }

  // For Module ===>
  { path: '', component: HomePageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
