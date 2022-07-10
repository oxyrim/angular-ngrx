import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoServices {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getTodo() {
    return this.http.get<Todo[]>(this.baseUrl + 'todos');
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(this.baseUrl + 'posts', todo);
  }
}
