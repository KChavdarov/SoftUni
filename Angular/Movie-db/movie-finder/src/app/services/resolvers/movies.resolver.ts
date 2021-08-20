import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDetails } from 'src/app/models/MovieDetails';
import { MovieService } from '../movie.service';

@Injectable()
export class MovieResolver implements Resolve<MovieDetails>{

    constructor(private movieService: MovieService) {};

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        const obs = [this.movieService.getPopularMovies(), this.movieService.getTheaterMovies()];

        const combined = combineLatest(obs).pipe(
            map(([popular, latest]) => ({ popular, latest }))
        );

        return combined;
    }

}
