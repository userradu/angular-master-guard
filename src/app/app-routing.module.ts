import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { GuestGuard } from './shared/guest.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummy2Component } from './dummy2/dummy2.component';
import { Dummy3Component } from './dummy3/dummy3.component';
import { Dummy1Guard } from './shared/dummy1.guard';
import { Dummy2Guard } from './shared/dummy2.guard';
import { Dummy3Guard } from './shared/dummy3.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canLoad: [GuestGuard]
  },
  {
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule',
    // canLoad: [AuthGuard]
    canActivate: [Dummy1Guard, Dummy2Guard, Dummy3Guard]
  },
  {
    path: 'dummy1',
    component: Dummy1Component
  },
  {
    path: 'dummy2',
    component: Dummy2Component
  },
  {
    path: 'dummy3',
    component: Dummy3Component
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
