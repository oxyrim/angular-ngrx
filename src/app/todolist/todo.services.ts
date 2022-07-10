import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from './todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoServices {
  id: number = 121;
  todosSubject = new Subject<Todo[]>();
  totalTodos: number = 0;
  totalTodosSubject = new Subject<number>();
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getTodo() {
    return this.http.get<Todo[]>(this.baseUrl + 'todos');
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(this.baseUrl + 'posts', todo);
    // .subscribe((todo: Todo) => {
    //   console.log('post');
    // });
  }

  // delete(id: number) {
  //   const todos = this.todos.filter((todo: Todo) => todo.id !== id);
  //   this.setTodo(todos);
  // }

  // setTodo(todos: Todo[], method: string = '') {
  //   if (method === 'post') {
  //     todos[0].id = this.id;
  //     this.todos = [...todos, ...this.todos];
  //     this.id++;
  //   } else {
  //     this.todos = [...todos];
  //   }
  //   this.todosSubject.next(this.todos);
  //   this.totalTodos = this.todos.length;
  //   this.totalTodosSubject.next(this.totalTodos);
  // }
}
