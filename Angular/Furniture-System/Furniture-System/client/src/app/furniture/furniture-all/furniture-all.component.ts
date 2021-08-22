import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { Furniture } from 'src/app/models/Furniture';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  furniture$: Observable<Furniture[]>;
  isAdmin: boolean;

  constructor(private furnitureService: FurnitureService, private authService: AuthService) {
    this.isAdmin = this.authService.isAdmin();
  }

  ngOnInit() {
    this.furniture$ = this.furnitureService.getAllFurniture();
  }

  deleteFurniture(id: string) {
    this.furnitureService.deleteFurniture(id).subscribe(
      () => this.furniture$ = this.furnitureService.getAllFurniture()
    );
  }

}
