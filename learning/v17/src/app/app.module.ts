import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// For Routing ===>
// import { HomeComponent } from "./routing/home/home.component";
// import { PostsComponent } from "./routing/posts/posts.component";
// import { PostComponent } from "./routing/post/post.component";
// import { AboutComponent } from "./routing/about/about.component";
// import { AboutExtraComponent } from "./routing/about-extra/about-extra.component";
// import { ErrorPageComponent } from './routing/error-page/error-page.component';
// For Modules ===>
import { HomePageComponent } from "./modules/home-page/home-page.component";
import { AboutPageComponent } from "./modules/about-page/about-page.component";
import { AboutExtraPageComponent } from "./modules/about-page/about-extra-page/about-extra-page.component";
import { ColorDirective } from "./modules/shared/color.directive";
import { PageNamePipe } from "./modules/shared/page-name.pipe";


@NgModule({
  declarations: [
    AppComponent,
    // For Routing ===>
    // HomeComponent,
    // PostsComponent,
    // PostComponent,
    // AboutComponent,
    // AboutExtraComponent,
    // ErrorPageComponent,
    // For Modules ===>
    HomePageComponent,
    AboutPageComponent,
    AboutExtraPageComponent,
    ColorDirective,
    PageNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
