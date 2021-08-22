import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit, OnDestroy {
  furniture$;
  subscription: Subscription;

  constructor(private furnitureService: FurnitureService) {}

  ngOnInit() {
    this.furniture$ = this.furnitureService.getMyFurniture();
  }

  deleteFurniture(id: string) {
    this.subscription = this.furnitureService.deleteFurniture(id).subscribe(() => this.furniture$ = this.furnitureService.getMyFurniture());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
