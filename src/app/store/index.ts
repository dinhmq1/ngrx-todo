import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { TodoState } from './todo/todo.state';
import { resettingMetaReducer } from './meta-reducers';
import { todoReducer } from './todo/todo.reducer';

export interface RootState {
  todo: TodoState;
}

export const reducers: ActionReducerMap<RootState> = {
  todo: todoReducer,
};

export const metaReducers: MetaReducer[] = [
  resettingMetaReducer,
];
