import { Component } from '@angular/core';
import { User } from './interfaces/User.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Components Lecture';

  addNewUserHandler(newUser: User): void {
    this.users.push(newUser);
  }

  users = [
    { name: 'Gosho', age: 20 },
    { name: 'Kiro', age: 29 },
    { name: 'Pesho', age: 32 },
  ]
}
