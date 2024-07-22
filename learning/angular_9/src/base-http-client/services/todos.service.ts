import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

export interface IToDo {
  id?: number,
  title: string,
  completed: boolean,
}

@Injectable({providedIn: "root"})
export class TodosService {
  constructor (private http: HttpClient) {}

  fetchTodos (): Observable<IToDo[]> {
    return this.http?.get<IToDo[]>("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .pipe(delay(1500));
  }

  addTodo (todo: IToDo): Observable<IToDo> {
    return this.http?.post<IToDo>("https://jsonplaceholder.typicode.com/todos", todo)

  }

  removeTodo(id?: number): Observable<IToDo[]> {
    return this.http?.delete<IToDo[]>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  completedTodo(id?: number): Observable<IToDo> {
    return this.http?.put<IToDo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}
