import * as fromTodo from './store/todo/todo.selectors';

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { reset } from './store/meta-reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stats$: Observable<fromTodo.TodoStats>;

  constructor(private store: Store) {
    this.stats$ = this.store.select(fromTodo.selectStats);
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
