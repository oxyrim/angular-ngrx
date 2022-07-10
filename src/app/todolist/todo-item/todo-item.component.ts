import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteTodo } from '../store/todo.actions';
import { Todo } from '../todo.interface';
import * as fromTodoReducer from '../store/todo.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;

  constructor(private store: Store<fromTodoReducer.AppState>) {}

  ngOnInit(): void {}

  onDelete(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }
}
