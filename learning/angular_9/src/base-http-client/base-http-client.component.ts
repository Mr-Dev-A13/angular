import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgFor, NgIf, TitleCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { delay } from "rxjs";
import {IToDo, TodosService} from "./services/todos.service";

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
  error: string = "";

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos () {
    this.loading = true;
    this.todosService?.fetchTodos()
      .subscribe(todo => {
        this.todoData = todo;
        this.loading = false;
      }, error => {
        this.error = error.message;
      })
  }

  addTodo () {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todosService.addTodo(
      {
        title: this.todoTitle,
        completed: false,
      }
    ).subscribe(resNewTodo => {
      this.todoData.unshift(resNewTodo);
      this.todoTitle = "";
    })
  }

  removeTodo(id?: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todoData = this.todoData.filter(todo => todo.id !== id);
      });
  }

  completedTodo(id?: number) {
    this.todosService.completedTodo(id)
      .subscribe((todo: IToDo) => {
        this.todoData.find((item: IToDo) => item?.id === todo?.id)!.completed = true;
    })
  }
}
