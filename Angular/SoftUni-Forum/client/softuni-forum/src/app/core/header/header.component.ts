import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  errorMessage = '';

  constructor(private errorService: ErrorService, private userService: UserService, private router: Router) {
    errorService.serverError.subscribe(msg => this.errorMessage = msg);
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  get user() {
    return this.userService.user;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {}
}
