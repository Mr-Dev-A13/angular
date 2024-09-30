import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./post/post.component";
import { AboutComponent } from "./about/about.component";
import { AboutExtraComponent } from "./about-extra/about-extra.component";
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    AboutComponent,
    AboutExtraComponent,
    ErrorPageComponent,

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
