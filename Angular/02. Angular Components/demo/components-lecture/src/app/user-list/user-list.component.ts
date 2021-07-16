import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/User.js';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User[] = []
  @Output() addUser = new EventEmitter<User>();

  addNewUser(userName: HTMLInputElement, userAge: HTMLInputElement): void {
    const name = userName.value;
    const age = userAge.valueAsNumber;
    this.addUser.emit({ name, age });
    userName.value = '';
    userAge.value = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
