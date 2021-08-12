import { Component, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { emailValidator, passwordsValidator } from '../../shared/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm: FormGroup;
  serverError!: string;
  codes: string[] = ['00359', '00337'];

  get register() {
    return this.registerForm.controls;
  }

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {
    this.registerForm = fb.group({
      username: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, emailValidator]],
      code: [this.codes[0]],
      phone: [null, Validators.pattern(/^\d{6}$/)],
      password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
      rePassword: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
    },
      {
        validators: [passwordsValidator('password', 'rePassword')]
      }
    );
  }

  onRegister() {
    const data = Object.assign({}, this.registerForm.value);
    if (data.phone) {
      data.tel = data.code + data.phone;
    }
    delete data.code;
    delete data.phone;
    this.userService.register(data).subscribe({
      next: () => {
        this.registerForm.reset();
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.serverError = err.error.message;
        setTimeout(() => { this.serverError = ''; },3000);
      }
    });
  }
}
