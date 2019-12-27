import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Movie {
  id?: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject([]);

  get movies() {
    return this.moviesSubject.asObservable();
  }

  constructor() {}

  private computeId(movies) {
    const ids = movies.map(movie => movie.id);
    if (!ids.length) {
      return 1;
    }
    return Math.max(...movies.map(movie => movie.id)) + 1;
  }

  addMovie(movie: Movie) {
    const movies = this.moviesSubject.value;
    const id = this.computeId(movies);
    movies.push({ id: id, ...movie });
    this.moviesSubject.next(movies);
  }

  deleteMovie(id: number) {
    const movies = this.moviesSubject.value.filter(movie => movie.id !== id);
    this.moviesSubject.next(movies);
  }
}
