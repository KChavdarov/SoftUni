import { RouterModule, Routes } from '@angular/router';
import { SingleMovieResolver } from '../services/resolvers/single-movie.resolver';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MoviesComponent,
    },
    {
        path: 'search',
        component: MovieSearchComponent
    },
    {
        path: ':id',
        component: MovieDetailsComponent,
        resolve: { singleMovie: SingleMovieResolver }
    },
];

export const movieRoutingModule = RouterModule.forChild(routes);