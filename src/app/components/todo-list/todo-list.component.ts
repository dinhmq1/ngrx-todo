import * as fromTodo from '../../store/todo/todo.selectors';

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RootState } from '../../store';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<RootState>) {
    this.todos$ = this.store.select(fromTodo.selectAll);
  }
}
