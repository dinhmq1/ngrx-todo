import { createAction, props } from '@ngrx/store';

import { Todo } from '../../models/todo';
import { randomId } from '../../util';

// export const submit = createAction(
//   '[Issue] Submit',
//   props<{ issue: Issue }>()
// );

export const submit = createAction('[Todo] Submit', (todo: Todo) => {
  return {
    todo: {
      ...todo,
      id: randomId(),
    },
  };
});
