import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionStorage } from '../core/injection-tokens';
import { User } from '../shared/interfaces/user';
import { tap } from 'rxjs/operators';


@Injectable()
export class UserService {
  user: User | null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient, @Inject(SessionStorage) private sessionStorage: Window['sessionStorage']) {
    try {
      const sessionStorageUser = this.sessionStorage.getItem('<USER>') || '';
      this.user = JSON.parse(sessionStorageUser);
    } catch {
      this.user = null;
    }
  }

  getProfileInfo() {
    return this.http.get<User>(environment.apiUrl + '/api/users/profile', { withCredentials: true }).pipe(
      tap((user) => {
        this.user = user;
        return this.sessionStorage.setItem('<USER>', JSON.stringify(user));
      })
    );;
  }

  updateProfile(data: { username: string, email: string, tel?: string; }) {
    console.log(data);
    return this.http.put<User>(environment.apiUrl + '/api/users/profile', data, { withCredentials: true }).pipe(
      tap((user) => {
        console.log(user);
        this.user = user;
        return this.sessionStorage.setItem('<USER>', JSON.stringify(user));
      })
    );;
  }

  login(data: { email: string, password: string; }) {
    return this.http.post<User>(environment.apiUrl + '/api/login', data, { withCredentials: true }).pipe(
      tap((user) => {
        this.user = user;
        return this.sessionStorage.setItem('<USER>', JSON.stringify(user));
      })
    );
  };

  register(data: User) {
    console.log(data);
    return this.http.post<User>(environment.apiUrl + '/api/register', data, { withCredentials: true }).pipe(
      tap((user) => {
        this.user = user;
        return this.sessionStorage.setItem('<USER>', JSON.stringify(user));
      })
    );
  }

  logout(): void {
    this.http.post(environment.apiUrl + '/api/logout', {});
    this.user = null;
    this.sessionStorage.removeItem('<USER>');
  };
}
