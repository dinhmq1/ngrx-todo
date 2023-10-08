import { metaReducers, reducers } from './store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodosComponent } from './components/todos/todos.component';
import { modules } from './modules/modules';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NewTodoComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
