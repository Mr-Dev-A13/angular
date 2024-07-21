import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgFor, TitleCasePipe } from "@angular/common";

export interface IToDo {
  id?: number,
  title: string,
  completed: boolean,
}

@Component({
  selector: 'app-base-http-client',
  standalone: true,
  imports: [NgFor, TitleCasePipe],
  templateUrl: './base-http-client.component.html',
  styleUrl: './base-http-client.component.scss'
})

export class BaseHttpClientComponent implements OnInit {
  todoData: IToDo[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http?.get<IToDo[]>("https://jsonplaceholder.typicode.com/todos?_limit=2")
      .subscribe(todo => {
        this.todoData = todo;
      })
  }
}
