import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesCreateComponent } from './movies-create/movies-create.component';
import { DummyLoadChildrenGuard } from '../shared/dummy-load-children.guard';
import { MovieDetailResolverService } from './movies-detail/movie-detail-resolver.service';
import { CanDeactivateGuard } from '../shared/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    canActivateChild: [DummyLoadChildrenGuard],
    children: [
      {
        path: '',
        component: MoviesListComponent
      },
      {
        path: 'new',
        component: MoviesCreateComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: ':id',
        component: MoviesDetailComponent,
        resolve: {
          movie: MovieDetailResolverService
        },
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
