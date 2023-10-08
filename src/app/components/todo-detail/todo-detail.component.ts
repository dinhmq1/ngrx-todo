import * as fromTodo from '../../store/todo/todo.selectors'

import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {
  todo$: Observable<Todo>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.todo$ = this.route.params.pipe(
      switchMap((params) =>
        this.store.select(fromTodo.selectOne(params['id']))
      )
    );
  }
}
