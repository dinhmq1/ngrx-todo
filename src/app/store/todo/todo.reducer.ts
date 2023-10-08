import * as TodoActions from './todo.actions';

import { createReducer, on } from '@ngrx/store';

import { Priority } from 'src/app/models/priority';
import { initialState } from './todo.state';
import { loggingMetaReducer } from '../meta-reducers';
import { produce } from 'immer';

export const reducer = createReducer(
  initialState,
  on(TodoActions.submit, (state, { todo }) =>
    produce(
      state,
      (draft: {
        entities: {
          [x: string]: {
            resolved: boolean;
            id: string;
            title: string;
            description: string;
            priority: Priority;
            completed: boolean;
          };
        };
      }) => {
        draft.entities[todo.id] = {
          ...todo,
          resolved: false,
        };
      }
    )
  )
);

export const todoReducer = loggingMetaReducer(reducer);
