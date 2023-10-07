import { createReducer } from '@ngrx/store';
import { initialState } from './todo.state';

export const todoReducer = createReducer(initialState);
