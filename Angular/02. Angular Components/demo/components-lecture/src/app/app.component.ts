import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/User';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Components Lecture';
  users: User[] | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  searchUsers(input: HTMLInputElement) {
    const search = input.value;
    this.loadUsers(search);
    input.value = '';
  }

  loadUsers(search: string = '') {
    this.userService.loadUsers(search).pipe(
      catchError(() => of([]))
    ).subscribe(
      users => this.users = users, //Next fn
      error => console.log(error),  //Error fn
      () => console.log('Load user stream completed!'), //Executed when stream finishes (including with error)

    );
  }
}
