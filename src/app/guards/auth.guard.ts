import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {IUser} from '../types/user';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {
  }

  canActivate(): boolean {
    const user: IUser = JSON.parse(localStorage.getItem('user'));

    if ('role' in user) {
      this.router.navigate(['home']);
    } else {
      return false;
    }
  }
}
