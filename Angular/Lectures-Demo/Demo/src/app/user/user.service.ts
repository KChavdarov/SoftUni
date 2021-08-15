import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';


@Injectable()
export class UserService {

  private users = new BehaviorSubject<User[] | null>(null);
  users$ = this.users.asObservable();

  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers(search: string = '') {
    const query = search ? '?email_like=' + search : '';
    this.users.next(null);
    this.http.get<User[]>('/api/users/' + query).subscribe((users) => this.users.next(users));
  }

  loadUser(id: number) {
    this.user.next(null);
    this.http.get<User>('/api/users/' + id).subscribe(user => this.user.next(user));
  }

  // loadUsers(search: string = '') {
  //   const query = search ? '?email_like=' + search : '';
  //   return this.http.get<User[]>('/api/users/' + query);
  // }

  // loadUser(id: number) {
  //   return this.http.get<User>('/api/users/' + id);
  // }
}