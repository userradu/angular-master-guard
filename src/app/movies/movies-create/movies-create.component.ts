import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from 'src/app/shared/movies.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/shared/can-deactivate.guard';

@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit, CanComponentDeactivate {
  form = this.fb.group({
    title: [''],
    description: ['']
  });

  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit() {}

  canDeactivate(): boolean {
    if (this.form.dirty && !this.formSubmitted) {
      return window.confirm(
        'You have unsaved changes! Are you sure you want to leave the page?'
      );
    }

    return true;
  }

  onSubmit() {
    this.moviesService.addMovie(this.form.value);
    this.formSubmitted = true;
    this.router.navigate(['/movies']);
  }

  cancel() {
    this.router.navigate(['/movies']);
  }
}
