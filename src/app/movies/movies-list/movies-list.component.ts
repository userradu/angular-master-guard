import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from 'src/app/shared/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<Movie[]> = this.moviesService.movies;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {}

  deleteMovie(id: number) {
    this.moviesService.deleteMovie(id);
  }
}
