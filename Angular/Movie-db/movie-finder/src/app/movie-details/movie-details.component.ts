import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieDetails } from '../models/MovieDetails';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$!: Observable<MovieDetails>;
  movieId: string;
  movieId$!: Observable<string>;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.movieId = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.movie$ = this.movieService.getMovie(id);
    });
  }

}
