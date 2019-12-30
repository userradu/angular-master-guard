import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
  CanLoad,
  CanActivateChild
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Dummy2Guard implements CanActivate, CanLoad, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('execute dummy guard 2');
    // this.router.navigate(['/dummy2']);
    return true;

    // return of(false).pipe(
    //   delay(3000),
    //   map(value => {
    //     console.log('execute dummy guard 2');
    //     this.router.navigate(['/dummy2']);
    //     return value;
    //   })
    // );
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('execute dummy guard 2');
    // this.router.navigate(['/dummy2']);
    // return false;

    return of(false).pipe(
      delay(300),
      map(value => {
        console.log('execute dummy guard 2');
        this.router.navigate(['/dummy2']);
        return value;
      })
    );
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('execute dummy guard 2');
    // this.router.navigate(['/dummy2']);
    // return false;

    return of(true).pipe(
      delay(300),
      map(value => {
        console.log('execute dummy guard 2');
        // this.router.navigate(['/dummy2']);
        return value;
      })
    );
  }
}
