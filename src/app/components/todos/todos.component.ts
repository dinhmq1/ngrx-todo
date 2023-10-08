import { Component, OnInit } from '@angular/core';

import { RootState } from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {}
}
