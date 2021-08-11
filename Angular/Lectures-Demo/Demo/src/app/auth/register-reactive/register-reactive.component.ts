import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent {
  form: FormGroup;
  codes: string[] = ['+359', '+301', '299'];
  professions: string[] = ['Designer', 'Developer', 'Manager'];

  get register() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder) {
    this.form = fb.group(
      {
        username: [null, [Validators.required, Validators.pattern(/^[A-Z]\w+\ [A-Z]\w+$/)]],
        email: ['', [Validators.required, Validators.email]],
        code: this.codes[0],
        tel: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
        image: [null, this.isImage],
        profession: [this.professions[0]],
        password: [null, Validators.minLength(6)],
        rePass: null,
      },
      {
        validators: [this.valueMatch('password', 'rePass')],
        asyncValidators: null,
        updateOn: 'change'
      }
    );
  }

  isImage(control: FormControl) {
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
        isImage: 'failed'
      };
    }
  }

  valueMatch(controlName: string, matchingName: string) {
    return (form: FormGroup) => {
      const control = form.controls[controlName];
      const matching = form.controls[matchingName];

      if (control.value !== matching.value) {
        matching.setErrors({ valueMatch: true });
      } else {
        matching.setErrors(null);
      }
    };
  }

  registerHandler() {
    console.log(this.form);
    this.form.reset();
  }

}
