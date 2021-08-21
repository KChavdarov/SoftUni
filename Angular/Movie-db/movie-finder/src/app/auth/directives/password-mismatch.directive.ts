import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appPasswordMismatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordMismatchDirective,
    multi: true
  }]
})
export class PasswordMismatchDirective implements Validator {

  constructor() {}

  validate(passwords: FormGroup): ValidationErrors | null {
    let password = passwords.get('password');
    let confirmPassword = passwords.get('confirmPassword');

    if (password?.value != confirmPassword?.value) {
      return { passwordMismatch: true };
    }

    return null;
  }

}
