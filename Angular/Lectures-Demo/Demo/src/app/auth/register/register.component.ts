import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('registerForm') form!: NgForm;
  codes: string[] = ['+359', '+301', '299'];
  professions: string[] = ['Designer', 'Developer', 'Manager'];

  constructor() {}

  registerHandler() {
    console.log(this.form);
    this.form.reset();
  }

}
