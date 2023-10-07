import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
