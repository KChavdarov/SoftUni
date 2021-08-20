import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { movieRoutingModule } from './movie-routing.module';
import { SingleMovieResolver } from '../services/resolvers/single-movie.resolver';
import { MovieResolver } from '../services/resolvers/movies.resolver';
import { MovieSearchComponent } from './movie-search/movie-search.component';



@NgModule({
  declarations: [
    MovieComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
  ],
  imports: [
    CommonModule,
    movieRoutingModule,
  ],
  providers: [
    MovieService,
    SingleMovieResolver,
    MovieResolver,
  ]
})
export class MovieModule {}
