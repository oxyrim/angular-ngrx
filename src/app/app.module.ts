import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todolist/todo-item/todo-item.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './todolist/add-todo/add-todo.component';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './todolist/store/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from './todolist/store/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ Todos: TodoReducer }),
    EffectsModule.forRoot([TodoEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
