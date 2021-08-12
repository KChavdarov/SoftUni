import { Component, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';
import { emailValidator } from '../../shared/validators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  editMode: boolean = false;
  user: User | null = null;
  codes: string[] = ['00359', '00337'];
  serverError = '';
  emailValidator = emailValidator;

  constructor(private router: Router, private userService: UserService) {
    this.userService.getProfileInfo().subscribe(
      user => this.user = user,
      err => { console.log(err); this.userService.logout(); this.router.navigate(['/login']); });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  updateProfile(form: NgForm) {
    const data = Object.assign({}, form.value);
    if (data.phone) {
      data.tel = data.code + data.phone;
    }
    delete data.code;
    delete data.phone;
    this.userService.updateProfile(data).subscribe(
      user => {
        this.user = user;
        this.toggleEdit();
      },
      err => {
        this.serverError = err.error.message;
        setTimeout(() => { this.serverError = ''; }, 3000);
      }
    );
  }
}