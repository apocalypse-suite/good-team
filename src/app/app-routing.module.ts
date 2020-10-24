import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {AuthGuardService} from './guards/auth.guard';
import {LoginComponent} from './components/pages/login/login.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {NotFoundComponent} from './components/pages/not-found/not-found.component';
import {TodoComponent} from './components/pages/todo/todo.component';
import {UserComponent} from './components/pages/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
