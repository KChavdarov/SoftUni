import { Inject, Injectable } from '@angular/core';
import { SessionStorage } from '../core/injection-tokens';
import { User } from '../shared/interfaces/user';

@Injectable()
export class UserService {
  user: User | null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(@Inject(SessionStorage) private sessionStorage: Window['sessionStorage']) {
    try {
      const sessionStorageUser = this.sessionStorage.getItem('<USER>') || '';
      this.user = JSON.parse(sessionStorageUser);
    } catch {
      this.user = null;
    }
  }

  login(email: string, password: string): void {
    this.user = {
      email,
      username: 'Johny',
      tel: '+359 885888588',
    };
    try {
      this.sessionStorage.setItem('<USER>', JSON.stringify(this.user));
    } catch {

    }
  };

  register(data: Object) {
    console.log(data);
  }

  logout(): void {
    this.user = null;
    this.sessionStorage.clear();
  };
}
