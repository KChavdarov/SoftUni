import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../../interfaces/User';
import { fromEvent, of } from 'rxjs';
import { catchError, debounceTime, distinct, map, tap } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit { // implements OnInit {
  @ViewChild('search') search!: ElementRef<HTMLInputElement>;

  constructor(private userService: UserService) {
    this.loadUsers();
  }

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'input')
      .pipe(debounceTime(200), map(event => (event.target as HTMLInputElement).value), distinct())
      .subscribe(value => this.loadUsers(value));
  }


  users$ = this.userService.users$;

  searchUsers(input: HTMLInputElement) {
    const search = input.value;
    this.loadUsers(search);
    input.value = '';
  }

  loadUsers(search: string = '') {
    this.userService.loadUsers(search);
  }

  // users: User[] | undefined;

  // searchUsers(input: HTMLInputElement) {
  //   const search = input.value;
  //   this.loadUsers(search);
  //   input.value = '';
  // }

  // loadUsers(search: string = '') {
  //   this.users = undefined;
  //   this.userService.loadUsers(search).pipe(
  //     catchError(() => of([]))
  //   ).subscribe(
  //     users => this.users = users, //Next fn
  //     error => console.log(error),  //Error fn
  //     () => console.log('Load user stream completed!'), //Executed when stream finishes (including with error)
  //   );
  // }
}
