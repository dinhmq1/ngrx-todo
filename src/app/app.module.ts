import { metaReducers, reducers } from './store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DatabaseService } from './services/database.service';
import { EffectsModule } from '@ngrx/effects';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodosComponent } from './components/todos/todos.component';
import { modules } from './modules/modules';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    InMemoryWebApiModule.forRoot(DatabaseService),
    modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
