import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.scss']
})
export class RegisterReactiveComponent {
  registerForm: FormGroup;
  codes = ['+359', '+391', '+123'];

  get f() {
    return this.registerForm.controls;
  }

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      code: ['', [Validators.required]],
      phone: [null, [Validators.required]],
      jobTitle: [null, [Validators.required]],
      passwords: fb.group({
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]]
      }, {
        validators: [this.passwordMismatch],
        asyncValidators: null,
        updateOn: 'change'
      })
    });

  }

  passwordMismatch(passwords: FormGroup): ValidationErrors | null {
    let password = passwords.get('password');
    let confirmPassword = passwords.get('confirmPassword');

    if (password?.value != confirmPassword?.value) {
      return { passwordMismatch: true };
    }

    return null;
  }

  registerHandler() {
    console.log(this.registerForm);
  }

}
