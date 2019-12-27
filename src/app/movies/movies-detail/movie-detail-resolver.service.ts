import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Movie, MoviesService } from 'src/app/shared/movies.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolverService implements Resolve<Movie> {
  constructor(private moviesService: MoviesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Movie {
    const id = parseInt(route.paramMap.get('id'), 10);

    const movie = this.moviesService.getMovieById(id);

    if (movie) {
      return movie;
    } else {
      this.router.navigate(['/movies']);
    }
  }
}
