import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-create',
  templateUrl: './furniture-create.component.html',
  styleUrls: ['./furniture-create.component.css']
})
export class FurnitureCreateComponent implements OnInit {
  form: FormGroup;

  get f() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder, private furnitureService: FurnitureService, private router: Router) {
    this.form = fb.group({
      make: [null, [Validators.required, Validators.minLength(4)]],
      model: [null, [Validators.required, Validators.minLength(4)]],
      year: [null, [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      image: [null, Validators.required],
      material: null
    });
  }

  ngOnInit() {
  }

  formHandler() {
    console.log(this.form.value);
    this.furnitureService.createFurniture(this.form.value).subscribe(() => {
      this.router.navigate(['furniture']);
    });
  }

}
