import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodo, StartPostTodo } from '../store/todo.actions';
import { Todo } from '../todo.interface';
import * as fromTodoReducer from '../store/todo.reducer';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(private store: Store<fromTodoReducer.AppState>) {}

  ngOnInit(): void {}

  onAdd(todo: HTMLInputElement) {
    const data: Todo = {
      userId: 6,
      id: 0,
      title: todo.value,
      completed: false,
    };
    this.store.dispatch(new StartPostTodo(data));
    todo.value = '';
  }
}
