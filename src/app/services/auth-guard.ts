import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

export abstract class AuthGuard {
  public abstract canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void;
}
