import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/movies']);
      return false;
    }
    return true;
  }
}
