import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Todo } from './todo.interface';
import * as fromTodoReducer from './store/todo.reducer';
import { StartLoadTodos } from './store/todo.actions';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  todoList?: Todo[];
  total: number = 0;
  todoSubscription!: Subscription;

  constructor(private store: Store<fromTodoReducer.AppState>) {}

  ngOnInit(): void {
    this.todoSubscription = this.store
      .select('Todos')
      .subscribe((todos: { todos: Todo[] }) => {
        this.total = todos.todos.length;
        this.todoList = todos.todos;
      });
    this.store.dispatch(new StartLoadTodos());
  }

  ngOnDestroy(): void {
    this.todoSubscription.unsubscribe();
  }
}
