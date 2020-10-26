import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {HomeComponent} from './components/pages/home/home.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {AuthGuardService} from './guards/auth.guard';
import {ButtonComponent} from './components/button/button.component';
import {StartPageComponent} from './components/pages/start-page/start-page.component';
import {NotFoundComponent} from './components/pages/not-found/not-found.component';
import { TodoComponent } from './components/pages/todo/todo.component';
import { UserComponent } from './components/pages/user/user.component';
import { TutorialsComponent } from './components/pages/tutorials/tutorials.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    ButtonComponent,
    StartPageComponent,
    TodoComponent,
    UserComponent,
    TutorialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}