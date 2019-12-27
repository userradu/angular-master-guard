import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from 'src/app/shared/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {
  form = this.fb.group({
    title: [''],
    description: ['']
  });

  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.moviesService.addMovie(this.form.value);
    this.router.navigate(['/movies']);
  }
}
