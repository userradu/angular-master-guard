import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  id: number;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    const movie = this.moviesService.getMovieById(this.id);

    this.form = this.fb.group({
      title: [movie.title],
      description: [movie.description]
    });
  }

  onSubmit() {
    this.moviesService.updateMovie({ id: this.id, ...this.form.value });
    this.router.navigate(['/movies']);
  }
}
