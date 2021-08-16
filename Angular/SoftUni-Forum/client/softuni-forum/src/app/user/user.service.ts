import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
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
    return this.http.get<User>('/api/users/profile').pipe(
      tap((user) => {
        this.user = user;
        return this.sessionStorage.setItem('<USER>', JSON.stringify(user));
      })
    );;
  }

  updateProfile(data: { username: string, email: string, tel?: string; }) {
    return this.http.put<User>('/api/users/profile', data).pipe(
      tap((user) => {
        this.user = user;
        return this.sessionStorage.setItem('<USER>', JSON.stringify(user));
      })
    );;
  }

  login(data: { email: string, password: string; }) {
    return this.http.post<User>('/api/login', data).pipe(
      tap((user) => {
        this.user = user;
        return this.sessionStorage.setItem('<USER>', JSON.stringify(user));
      })
    );
  };

  register(data: User) {
    return this.http.post<User>('/api/register', data).pipe(
      tap((user) => {
        this.user = user;
        return this.sessionStorage.setItem('<USER>', JSON.stringify(user));
      })
    );
  }

  logout(): void {
    this.http.post('/api/logout', {});
    this.user = null;
    this.sessionStorage.removeItem('<USER>');
  };
}
