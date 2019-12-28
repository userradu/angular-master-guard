import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Dummy3Guard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('execute dummy guard 3');
    this.router.navigate(['/dummy3']);
    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('execute dummy guard 3');
    // this.router.navigate(['/dummy3']);
    // return true;

    return of(true).pipe(
      delay(1000),
      map(value => {
        console.log('execute dummy guard 3');
        // this.router.navigate(['/dummy3']);
        return value;
      })
    );
  }
}
