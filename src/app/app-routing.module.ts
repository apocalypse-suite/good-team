import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
/*  {
    path: '',
    component:
  },
  {
    path: 'users',
    component
  },
  {
  path: 'todos',
    component:
  },
  {
    path: 'logOut',
    component:
  },
  {
    path: '**',
    component: NotFoundComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
