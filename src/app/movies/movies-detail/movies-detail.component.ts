import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from 'src/app/shared/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CanComponentDeactivate } from 'src/app/shared/can-deactivate.guard';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit, CanComponentDeactivate {
  movie: Movie;
  form: FormGroup;
  formSubmitted = false;

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

  canDeactivate(): boolean {
    if (this.form.dirty && !this.formSubmitted) {
      return window.confirm(
        'You have unsaved changes! Are you sure you want to leave the page?'
      );
    }

    return true;
  }

  onSubmit() {
    this.moviesService.updateMovie(this.form.value);
    this.formSubmitted = true;
    this.router.navigate(['/movies']);
  }

  cancel() {
    this.router.navigate(['/movies']);
  }
}
