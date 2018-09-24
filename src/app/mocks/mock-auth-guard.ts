import {AuthGuard} from '../services/auth-guard';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockAuthGuard implements AuthGuard {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return false;
  }
}
