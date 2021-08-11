import { Directive, Input, OnDestroy } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ngModel][appSameValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SameValueDirective,
      multi: true
    }
  ]
})

export class SameValueDirective implements OnDestroy, Validator {
  @Input() appSameValue!: string;
  @Input() name!: string;

  otherControl!: AbstractControl;
  subscription!: Subscription;

  constructor(private form: NgForm) {}

  validate(control: AbstractControl): ValidationErrors | null {
    this.otherControl = this.form.controls[this.appSameValue];
    const otherControlValue = this.otherControl.value;
    if (this.subscription) { this.subscription.unsubscribe(); }
    this.subscription = this.otherControl.valueChanges.subscribe(() => {
      control.updateValueAndValidity({ onlySelf: true });
    });
    return control.value !== otherControlValue ? {
      sameValue: {
        [this.appSameValue]: otherControlValue,
        [this.name]: control.value,
      }
    } : null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
