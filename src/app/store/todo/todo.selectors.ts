import { Filter, TodoState, Todos } from './todo.state';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';

import { RootState } from '..';
import { Todo } from '../../models/todo';
import { pipe } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

export const selectFeature = createFeatureSelector<TodoState>('todo');

export const selectEntities = createSelector(
  selectFeature,
  ({ entities }) => entities
);

export const selectAll = createSelector(selectEntities, (entities) =>
  Object.values(entities)
);

export const selectFilter = createSelector(
  selectFeature,
  ({ filter }) => filter
);

export const selectFiltered = createSelector(
  selectAll,
  selectFilter,
  (todos: Todo[], { text }: Filter) => {
    if (text) {
      const lowercased = text.toLowerCase();
      return todos.filter(
        ({ title, description }) =>
          title.toLowerCase().includes(lowercased) ||
          description.toLowerCase().includes(lowercased)
      );
    } else {
      return todos;
    }
  }
);

export interface TodoStats {
  total: number;
  completed: number;
}

export const selectStats = createSelector(selectAll, (todos): TodoStats => {
  const completed = todos.filter((todo) => todo.completed);
  return {
    total: todos.length,
    completed: completed.length,
  };
});

export const selectOne = (id: string) =>
  createSelector(selectEntities, (entities: Todos) => entities[id]);

export const selectLoaded = createSelector(
  selectFeature,
  ({ loaded }) => loaded
);

export const selectAllLoaded = () =>
  pipe(
    skipWhile((state: RootState) => !selectLoaded(state)),
    select(selectAll)
  );
