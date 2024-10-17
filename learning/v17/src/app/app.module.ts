import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// For Routing ===>
// import { HomeComponent } from "./routing/home/home.component";
// import { PostsComponent } from "./routing/posts/posts.component";
// import { PostComponent } from "./routing/post/post.component";
// import { AboutComponent } from "./routing/about/about.component";
// import { AboutExtraComponent } from "./routing/about-extra/about-extra.component";
// import { ErrorPageComponent } from './routing/error-page/error-page.component';
// For Modules ===>
// import { HomePageComponent } from "./modules/home-page/home-page.component";
// import { SharedModule } from "./modules/shared/shared.module";
// For Modal ===>
import { ModalComponent } from "./modal/modal.component";


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
    // HomePageComponent,
    // For Modal ===>
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    // For Modules
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
