import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') form!: NgForm;

  codes = ['+359', '+391', '+123'];

  constructor() {}

  ngOnInit(): void {
  }

  registerHandler() {

  }

}
