import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './todo.interface';
import * as fromTodoReducer from './store/todo.reducer';
import { StartLoadTodos } from './store/todo.actions';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  todoList$: Observable<{ todos: Todo[] }>;
  // total: number = 0;
  // todoSubscription!: Subscription;
  // totalSubscription!: Subscription;

  constructor(private store: Store<fromTodoReducer.AppState>) {
    this.todoList$ = this.store.select('Todos');
  }

  ngOnInit(): void {
    this.store.dispatch(new StartLoadTodos());
    // this.todoServices.getTodo();
    // this.todoSubscription = this.todoServices.todosSubject.subscribe(
    //   (todos: Todo[]) => {
    //     this.todoList = [...todos];
    //   }
    // );
    // this.totalSubscription = this.todoServices.totalTodosSubject.subscribe(
    //   (total: number) => {
    //     this.total = total;
    //   }
    // );
  }

  ngOnDestroy(): void {
    // this.todoSubscription.unsubscribe();
    // this.totalSubscription.unsubscribe();
  }
}
