import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  // popularMovies$!: Observable<Movie[]>;
  popularMovies!: Movie[];
  theaterMovies$!: Observable<Movie[]>;
  popularKids$!: Observable<Movie[]>;
  bestDrama$!: Observable<Movie[]>;
  subscription!: Subscription;
  targetText = '';

  constructor(private movieService: MovieService) {}


  buttonClickHandler(event: string) {
    this.targetText = event;
  }

  ngOnInit(): void {
    // this.popularMovies$ = this.movieService.getPopularMovies();
    this.subscription = this.movieService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies;
    });

    this.theaterMovies$ = this.movieService.getTheaterMovies();
    this.popularKids$ = this.movieService.getPopularKids();
    this.bestDrama$ = this.movieService.getBestDramasThisYear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}