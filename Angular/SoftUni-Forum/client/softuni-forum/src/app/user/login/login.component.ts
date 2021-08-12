import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  serverError = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) {}

  login(form: NgForm) {
    const { email, password } = form.value;

    this.userService.login({ email, password }).subscribe({
      next: () => {
        form.reset();
        this.router.navigate([this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/']);
      },
      error: (err) => {
        this.serverError = err.error.message;
        setTimeout(() => { this.serverError = ''; }, 3000);
      }
    });
  }
}
