import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesCreateComponent } from './movies-create/movies-create.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesCreateComponent
  ],
  imports: [CommonModule, MoviesRoutingModule]
})
export class MoviesModule {}
