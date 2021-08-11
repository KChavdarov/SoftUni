import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordCheck]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordCheckDirective,
      multi: true
    }
  ]
})
export class PasswordCheckDirective implements Validator {
  constructor() {}

  validate(group: FormGroup): ValidationErrors | null {
    let isValid = false;
    if (group.controls['password'] && group.controls['re-password']) {
      isValid = group.controls['password'].value === group.controls['re-password'].value;
    }
    if (isValid) {
      return null;
    } else {
      return {
        appPasswordCheck: 'failed'
      };
    }
  }

}
