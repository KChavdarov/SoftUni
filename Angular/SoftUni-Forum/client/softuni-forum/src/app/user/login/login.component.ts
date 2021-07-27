import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private router: Router) {}

  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.userService.login(email.value, password.value);
    email.value = '';
    password.value = '';
    this.router.navigate(['/home']);
  }
}
