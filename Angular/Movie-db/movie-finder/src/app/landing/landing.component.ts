import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
  }

  searchMovies(form: NgForm) {
    let { query } = form.value;
    this.router.navigate(['movies', 'search'], { queryParams: { query } });
  }

}
