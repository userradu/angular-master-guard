import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { GuestGuard } from './shared/guest.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canLoad: [GuestGuard]
  },
  {
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule',
    canLoad: [AuthGuard]
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
