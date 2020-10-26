import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {AuthGuardService} from './guards/auth.guard';
import {LoginComponent} from './components/pages/login/login.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {NotFoundComponent} from './components/pages/not-found/not-found.component';
import {TodoComponent} from './components/pages/todo/todo.component';
import {UserComponent} from './components/pages/user/user.component';
import {TutorialsComponent} from './components/pages/tutorials/tutorials.component';

const routes: Routes = [
  {path: '', canActivate: [AuthGuardService], component: HomeComponent},
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    canActivate: [AuthGuardService],
    component: UserComponent
  },
  {
    path: 'tutorials',
    canActivate: [AuthGuardService],
    component: TutorialsComponent
  },
  {
    path: 'todos',
    canActivate: [AuthGuardService],
    component: TodoComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
