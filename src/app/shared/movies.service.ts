import { Injectable } from '@angular/core';

export interface Movie {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [];

  constructor() {}

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
}
