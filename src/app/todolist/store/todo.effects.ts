import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, mergeMap } from 'rxjs';

import { TodoServices } from '../todo.services';
import { Todo } from '../todo.interface';
import * as TodoAction from './todo.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoEffect {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoAction.START_LOAD_TODOS),
      switchMap(() => {
        return this.todoService.getTodo().pipe(
          map((todos: Todo[]) => {
            return new TodoAction.AddTodos(todos);
          })
        );
      })
    )
  );

  postTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoAction.START_POST_TODO),
      switchMap((todo: TodoAction.StartPostTodo) => {
        return this.todoService
          .addTodo({
            userId: todo.payload.userId,
            id: todo.payload.id,
            title: todo.payload.title,
            completed: todo.payload.completed,
          })
          .pipe(
            map((resData: Todo) => {
              return new TodoAction.AddTodo(resData);
            })
          );
      })
    )
  );
  constructor(private actions$: Actions, private todoService: TodoServices) {}
}
