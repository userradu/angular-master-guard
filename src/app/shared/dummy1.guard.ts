import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route,
  CanActivateChild
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Dummy1Guard implements CanActivate, CanLoad, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('execute dummy guard 1');
    // this.router.navigate(['/dummy1']);
    return true;

    // return of(false).pipe(
    //   delay(300),
    //   map(value => {
    //     console.log('execute dummy guard 1');
    //     this.router.navigate(['/dummy1']);
    //     return value;
    //   })
    // );
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('execute dummy guard 1');
    this.router.navigate(['/dummy1']);
    return false;

    // return of(true).pipe(
    //   delay(3000),
    //   map(value => {
    //     console.log('execute dummy guard 1');
    //     // this.router.navigate(['/dummy1']);
    //     return value;
    //   })
    // );
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('execute dummy guard 1');
    // // this.router.navigate(['/dummy1']);
    // return true;

    return of(true).pipe(
      delay(4000),
      map(value => {
        console.log('execute dummy guard 1');
        // this.router.navigate(['/dummy1']);
        return value;
      })
    );
  }
}
