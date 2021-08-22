import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Furniture } from 'src/app/models/Furniture';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-edit',
  templateUrl: './furniture-edit.component.html',
  styleUrls: ['./furniture-edit.component.css']
})
export class FurnitureEditComponent implements OnInit {
  furniture: any;
  form: FormGroup;

  get f() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder, private furnitureService: FurnitureService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }) => this.furnitureService.getFurnitureDetails(id))
    ).subscribe(furniture => {
      this.furniture = furniture;
      this.form = this.fb.group({
        make: [furniture.make, [Validators.required, Validators.minLength(4)]],
        model: [furniture.model, [Validators.required, Validators.minLength(4)]],
        year: [furniture.year, [Validators.required, Validators.min(1950), Validators.max(2050)]],
        description: [furniture.description, [Validators.required, Validators.minLength(10)]],
        price: [furniture.price, [Validators.required, Validators.min(0.1)]],
        image: [furniture.image, Validators.required],
        material: furniture.material || null
      });
    });
  }

  formHandler() {
    console.log(this.furniture);

    console.log(this.form.value);
    this.furnitureService.editFurniture(this.furniture.id, this.form.value).subscribe(() => {
      this.router.navigate(['furniture']);
    });
  }
}
