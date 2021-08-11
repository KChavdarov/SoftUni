import { Directive } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appIsImage]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IsImageDirective,
      multi: true
    }
  ]
})
export class IsImageDirective implements Validator {

  constructor(private from: NgForm) {}
  validate(control: AbstractControl): ValidationErrors | null {
    let isValid = false;
    if (typeof control.value == 'string') {
      if (control.value.startsWith('http') && (control.value.endsWith('jpg') || control.value.endsWith('png'))) {
        isValid = true;
      }
    }
    if (isValid) {
      return null;
    } else {
      return {
        appIsImage: 'failed'
      };
    }
  }

}
