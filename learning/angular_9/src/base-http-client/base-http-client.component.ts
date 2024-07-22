import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgFor, NgIf, TitleCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { delay } from "rxjs";

export interface IToDo {
  id?: number,
  title: string,
  completed: boolean,
}

@Component({
  selector: 'app-base-http-client',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe, FormsModule],
  templateUrl: './base-http-client.component.html',
  styleUrl: './base-http-client.component.scss'
})

export class BaseHttpClientComponent implements OnInit {
  todoData: IToDo[] = [];
  todoTitle: string = "";
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos () {
    this.loading = true;
    this.http?.get<IToDo[]>("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .pipe(delay(1500))
      .subscribe(todo => {
        console.log(todo)
        this.todoData = todo;
        this.loading = false;
      });
  }

  addTodo () {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: IToDo = {
      title: this.todoTitle,
      completed: false,
    }

    this.http.post<IToDo>("https://jsonplaceholder.typicode.com/todos", newTodo)
      .subscribe(resNewTodo => {
        this.todoData.unshift(resNewTodo);
        this.todoTitle = "";
      })
  }

  removeTodo(id?: number) {
    this.http?.delete<IToDo[]>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todoData = this.todoData.filter(todo => todo.id !== id);
        console.log(this.todoData);
      });
  }
}
