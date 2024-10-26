import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from "./counter/counter.component";
import { FormComponent } from "./form/form.component";
import { PostsComponent } from "./posts/posts.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
