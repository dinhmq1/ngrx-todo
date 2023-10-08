import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActions } from '../../store/todo/todo.actions';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent {
  form: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['low', Validators.required],
    });
  }

  submit(): void {
    const todo = this.form.value;
    this.store.dispatch(TodoActions.submit(todo));
  }
}
