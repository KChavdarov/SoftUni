import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  loadUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
  loadUserDetails(id: string) {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
