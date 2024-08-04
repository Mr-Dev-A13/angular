import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { MultipleByPipe } from "./pipes/mult-by.pipe";
import { ExMarksPipe } from "./pipes/ex-marks.pipe";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./pipes/filter.pipe";
import {Observable, Subscriber} from "rxjs";

export interface Posts {
  [key: string]: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MultipleByPipe,
    ExMarksPipe,
    FormsModule,
    FilterPipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  title = 'pipes';

  p: Promise<string> = new Promise<string> ((resolve): void => {
    setTimeout((): void => {
      resolve("Promise is resolved!");
    }, 3000);
  });

  dateObs: Observable<Date> = new Observable((obs: Subscriber<Date>): void => {
    setInterval((): void => {
      obs.next(new Date());
    }, 1000);
  })

  e: number = Math.E;
  str: string = "hello world!"
  date: Date = new Date();
  num: number = 13;
  obj = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
      f: {
        g: 5
      }
    }
  }

  posts: Posts[] = [
    {title: "React", text: "is a library"},
    {title: "Angular", text: "is a framework"},
    {title: "Svelte", text: "is a compiler"},
  ];

  searchField: string = "title";
  search: string = "";

  onSearchFieldHandler () {
    if (this.searchField === "title") {
      this.searchField = "text";
    } else {
      this.searchField = "title";
    }



  }

  onAddPostItemHandler () {
    this.posts.unshift({
      title: "Vue",
      text: "is a framework"
    })
  }
}
