import { Component } from '@angular/core';
import { User } from './interfaces/User';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const value = of(1000, 20, 300).pipe(map(x => x + 100));

value.subscribe(x => console.log(x));





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Components Lecture';

  constructor(private userService: UserService) { }

  get users() {
    return this.userService.users;
  }

  get addNewUserHandler() {
    return this.userService.addNewUserHandler;
  }
}
