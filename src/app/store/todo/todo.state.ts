import { Todo } from '../../models/todo';

export interface Todos {
  [id: string]: Todo;
}

export interface Filter {
  text: string;
}

export interface TodoState {
  entities: Todos;
  filter: Filter;
}

export const initialState: TodoState = {
  entities: {},
  filter: {
    text: '',
  },
};
