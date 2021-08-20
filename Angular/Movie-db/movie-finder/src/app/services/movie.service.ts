import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
import { map } from 'rxjs/operators';
import { MovieDetails } from '../models/MovieDetails';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=89c6df34beebda8737a6ebd09626b671';
const ALT_API_KEY = '&api_key=89c6df34beebda8737a6ebd09626b671';

@Injectable()
export class MovieService {
  endpoints = {
    movie: '/movie/',
    popular: '/movie/popular',
    theater: '/movie/now_playing',
    popularKids: '/discover/movie?certification_country=US&certification=G&sort_by=popularity.desc',
    bestDramasReleasedThisYear: '/discover/movie?with_genres=18&primary_release_year=2021',
    search: '/search/movie'

  };

  constructor(private http: HttpClient) {}

  getMovie(id: string) {
    return this.http.get<MovieDetails>(BASE_URL + this.endpoints.movie + id + API_KEY);
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[]; }>(BASE_URL + this.endpoints.popular + API_KEY).pipe(
      map(({ results }) => results.slice(0, 6))
    );
  }

  getTheaterMovies(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[]; }>(BASE_URL + this.endpoints.theater + API_KEY).pipe(
      map(({ results }) => results.slice(0, 6))
    );
  }
  getPopularKids(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[]; }>(BASE_URL + this.endpoints.popularKids + ALT_API_KEY).pipe(
      map(({ results }) => results.slice(0, 6))
    );
  }
  getBestDramasThisYear(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[]; }>(BASE_URL + this.endpoints.bestDramasReleasedThisYear + ALT_API_KEY).pipe(
      map(({ results }) => results.slice(0, 6))
    );
  }

  searchMovie(query: string): Observable<Movie[]> {
    const path = BASE_URL + this.endpoints.search + API_KEY + `&query=${query}`;
    return this.http.get<{ results: Movie[]; }>(path).pipe(
      map(({ results }) => results)
    );
  }
}
