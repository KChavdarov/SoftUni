import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  loadUsers(search: string = '') {
    const query = search ? '?email_like=' + search : '';
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users' + query);
  }
}