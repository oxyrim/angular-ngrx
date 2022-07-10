import { Action } from '@ngrx/store';
import { Todo } from '../todo.interface';
import * as TodoAction from './todo.actions';

export interface State {
  todos: Todo[];
}

export interface AppState {
  Todos: State;
}

const initialState = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
  ],
};

export function TodoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case TodoAction.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, (action as TodoAction.AddTodo).payload],
      };

    case TodoAction.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter(
          (todo) => todo.id !== (action as TodoAction.DeleteTodo).playload
        ),
      };

    case TodoAction.ADD_TODOS:
      return {
        ...state,
        todos: [...(action as TodoAction.AddTodos).playload],
      };

    default:
      return state;
  }
}
