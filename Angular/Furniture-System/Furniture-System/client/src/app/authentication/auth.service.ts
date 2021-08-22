import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private readonly loginUrl = environment.apiUrl + '/auth/login';
  private readonly registerUrl = environment.apiUrl + '/auth/register';

  constructor(
    private http: HttpClient
  ) {}

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() {
    let result = localStorage.getItem('isAdmin');
    if (result !== null) {
      return Boolean(JSON.parse(result));
    } else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }
}