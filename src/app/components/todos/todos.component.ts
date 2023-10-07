import { Component } from '@angular/core';
import { RootState } from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {}
}
