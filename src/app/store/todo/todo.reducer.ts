import { ActionReducer, createReducer, on } from '@ngrx/store';
import { TodoState, initialState } from './todo.state';

import { TodoActions } from './todo.actions';
import { produce } from 'immer';

export const reducer = createReducer(
  initialState,
  on(TodoActions.submit, (state, { todo }) =>
    produce(state, (draft) => {
      draft.entities[todo.id] = {
        ...todo,
        completed: false,
      };
    })
  ),
  on(
    TodoActions.search,
    (state, { text }): TodoState => ({
      ...state,
      filter: {
        ...state.filter,
        text,
      },
    })
  ),
  on(TodoActions.resolve, (state, { todoId }): TodoState => {
    const todo = state.entities[todoId];
    return {
      ...state,
      entities: {
        ...state.entities,
        [todoId]: {
          ...todo,
          completed: true,
        },
      },
    };
  })
);

export const todoReducer: ActionReducer<TodoState> = (state, action) => {
  try {
    return reducer(state, action);
  } catch (error) {
    console.error(error);
    return state ?? initialState;
  }
};
