import { createActionGroup, props } from '@ngrx/store';

import { Todo } from '../../models/todo';
import { randomId } from '../../random-id';

export const TodoActions = createActionGroup({
  source: 'Todos',
  events: {
    Submit: (todo: Todo) => {
      return {
        todo: {
          ...todo,
          id: randomId(),
        },
      };
    },
    Search: props<{ text: string }>(),
    Resolve: props<{ todoId: string }>(),
  },
});
