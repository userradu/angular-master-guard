import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from 'src/app/shared/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movie: Movie;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { movie: Movie }) => {
      this.movie = data.movie;

      this.form = this.fb.group({
        id: [this.movie.id],
        title: [this.movie.title],
        description: [this.movie.description]
      });
    });
  }

  onSubmit() {
    this.moviesService.updateMovie(this.form.value);
    this.router.navigate(['/movies']);
  }
}
