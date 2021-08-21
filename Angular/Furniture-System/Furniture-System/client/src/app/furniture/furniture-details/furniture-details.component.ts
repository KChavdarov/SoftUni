import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Furniture } from 'src/app/models/Furniture';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  furniture$: Observable<Furniture>;

  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      ({ id }) => this.furniture$ = this.furnitureService.getFurnitureDetails(id)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
