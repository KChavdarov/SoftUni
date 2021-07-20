import { Inject, Injectable } from '@angular/core';
import { myStringInjectionToken } from './app.module';
import { User } from './interfaces/User';


@Injectable()
export class UserService {
  addNewUserHandler(newUser: User): void {
    this.users.push(newUser);
  }

  public users = [
    { name: 'Gosho', age: 20 },
    { name: 'Kiro', age: 29 },
    { name: 'Pesho', age: 32 },
  ]

  constructor(@Inject(myStringInjectionToken) myString: string) {
    console.log(myString);
  }
}
