import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthGuard} from './auth-guard';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class AuthGuardService implements CanActivate, AuthGuard {

  constructor(private router: Router,
              private firebaseAuth: AngularFireAuth) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.firebaseAuth.auth.currentUser !== null;
  }
}
