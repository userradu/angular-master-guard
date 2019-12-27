import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesCreateComponent } from './movies-create/movies-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesCreateComponent
  ],
  imports: [CommonModule, MoviesRoutingModule, ReactiveFormsModule]
})
export class MoviesModule {}
