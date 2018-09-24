import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthGuard} from './auth-guard';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, AuthGuard {

  constructor(private router: Router,
              private firebaseAuth: AngularFireAuth) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.firebaseAuth.auth.currentUser === null) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
