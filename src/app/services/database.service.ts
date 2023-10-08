import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { randomId } from '../random-id';

interface Database {
  todos: Todo[];
}

@Injectable()
export class DatabaseService implements InMemoryDbService {
  createDb(): Database {
    return {
      todos: [
        {
          id: this.genId(),
          title: 'Example Issue',
          description: 'This is a pre-existing issue',
          priority: 'medium',
          completed: false,
        },
      ],
    };
  }

  genId(): string {
    return randomId();
  }
}
