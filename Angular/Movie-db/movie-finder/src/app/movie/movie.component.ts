import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() buttonClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  clickHandler(event: any) {
    this.buttonClick.emit(`Button with id: ${event.target.id} was clicked!`);
  }

}
