import { Injectable } from "@angular/core";
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {catchError, delay, map, Observable, tap, throwError} from "rxjs";

export interface IToDo {
  id?: number,
  title: string,
  completed: boolean,
}

@Injectable({providedIn: "root"})
export class TodosService {
  constructor (private http: HttpClient) {}

  fetchTodos (): Observable<IToDo[]> {
    let params: HttpParams;
    // Using (---> set <---) method of HttpParams
    params = new HttpParams().set("_limit", "3");
    // Using (---> append <---) method of HttpParams
    // params = new HttpParams().append("_limit", "3");

    return this.http?.get<IToDo[]>("https://jsonplaceholder.typicode.com/todos", {
      params,
      observe: "response"
    })
      .pipe(
        map((response: HttpResponse<IToDo[]>) => {
          // console.log("Response(map) ===>", response);
          return <IToDo[]> response.body
        }),
        delay<IToDo[]>(1500),
        catchError(error => {
          // console.log("Error ===>", error.message);
          return throwError(error);
        })
      );
  }

  addTodo (todo: IToDo): Observable<IToDo> {
    return this.http?.post<IToDo>("https://jsonplaceholder.typicode.com/todos", todo, {
      headers: new HttpHeaders({
        CustomHeaderProperty: "A13"
      })
    })

  }

  removeTodo(id?: number): Observable<HttpEvent<IToDo[]>> {
    return this.http?.delete<IToDo[]>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: "events"
    })
      .pipe(
        tap((event: HttpEvent<IToDo[]>) => {
          if (event.type === HttpEventType.Sent) {
            // console.log("Sent Event", event);
          }

          if (event.type === HttpEventType.Response) {
            // console.log("Response Event", event);
          }
        })
      )
  }

  completedTodo(id?: number): Observable<IToDo> {
    return this.http?.put<IToDo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}
