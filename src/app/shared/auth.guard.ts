import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
  CanLoad
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogin();
  }

  canLoad(route: Route): boolean {
    return this.checkLogin();
  }

  checkLogin() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
