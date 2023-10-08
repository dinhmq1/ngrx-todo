import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TodosComponent } from './components/todos/todos.component';
import { modules } from './modules/modules';
import { reducers } from './store';

@NgModule({
  declarations: [AppComponent, TodosComponent, NewTodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
