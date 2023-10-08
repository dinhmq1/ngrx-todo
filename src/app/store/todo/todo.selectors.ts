import { RootState } from '..';

export const selectAll = (state: RootState) =>
  Object.values(state.todo.entities);
