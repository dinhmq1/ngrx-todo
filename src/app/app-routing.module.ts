import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('./settings/settings.module').then((m) => m.SettingsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
