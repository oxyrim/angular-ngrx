import { Action } from '@ngrx/store';
import { Todo } from '../todo.interface';

export const ADD_TODO = '[Todo] Add Todo';
export const ADD_TODOS = '[Todo] Add Todos';
export const DELETE_TODO = '[Todo] Delete Todo';
export const START_LOAD_TODOS = '[Todo] Start Load Todos';
export const START_POST_TODO = '[Todo] Start POST Todo';

export class StartPostTodo implements Action {
  readonly type: string = START_POST_TODO;
  constructor(public payload: Todo) {
    // console.log(this.payload);
  }
}

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: Todo) {}
}

export class AddTodos implements Action {
  readonly type = ADD_TODOS;
  constructor(public playload: Todo[]) {}
}

export class StartLoadTodos implements Action {
  type: string = START_LOAD_TODOS;
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public playload: number) {}
}

export type TodoActions = AddTodo | DeleteTodo;
