import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/User';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService){}

  users: User[] | undefined;

  ngOnInit(): void {
    this.loadUsers()
  }

  searchUsers(input: HTMLInputElement) {
    const search = input.value;
    this.loadUsers(search);
    input.value = '';
  }

  loadUsers(search: string = '') {
    this.users = undefined;
    this.userService.loadUsers(search).pipe(
      catchError(() => of([]))
    ).subscribe(
      users => this.users = users, //Next fn
      error => console.log(error),  //Error fn
      () => console.log('Load user stream completed!'), //Executed when stream finishes (including with error)
    );
  }
}
