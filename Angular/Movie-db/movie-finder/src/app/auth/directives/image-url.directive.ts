import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appImageUrl]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ImageUrlDirective,
    multi: true,
  }]
})
export class ImageUrlDirective implements Validator {

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    let value: string = control.value;
    if (value) {
      let isValid = false;
      if ((value.startsWith('http://') || value.startsWith('https://')) && (value.endsWith('.jpg') || value.endsWith('.png'))) {
        isValid = true;
      }
      return isValid ? null : { invalidUrl: true };
    } else {
      return null;
    }
  }

}
