import * as fromTodo from '../../store/todo/todo.selectors';

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo';
import { TodoActions } from 'src/app/store/todo/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(fromTodo.selectFiltered);
  }
  search(text: string): void {
    this.store.dispatch(TodoActions.search({ text }));
  }

  resolve(todo: Todo): void {
    this.store.dispatch(TodoActions.resolve({ todoId: todo.id }));
  }
}
