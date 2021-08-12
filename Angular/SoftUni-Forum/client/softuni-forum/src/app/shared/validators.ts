import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const pattern = /^[\w]{4,}@(gmail|abv)\.(com|bg)$/;
    let isValid = false;
    if (control.value) {
        isValid = pattern.test(control.value);
    }
    return isValid ? null : { invalidEmail: true };
}

export function passwordsValidator(controlName: string, matchName: string) {
    return (group: FormGroup) => {
        const control = group.controls[controlName];
        const match = group.controls[matchName];
        let isValid = control.value === match.value;

        if (isValid) {
            // if (control.errors) {
            //   delete control.errors.valueMismatch;
            //   if (Object.keys(control.errors).length === 0) {
            //     control.setErrors(null);
            //   }
            // }
            if (match.errors) {
                delete match.errors.valueMismatch;
                if (Object.keys(match.errors).length === 0) {
                    match.setErrors(null);
                }
            }
        } else {
            // control.setErrors(Object.assign({}, control.errors, { valueMismatch: true }));
            match.setErrors(Object.assign({}, control.errors, { valueMismatch: true }));
        }

        return isValid ? null : { valueMismatch: true };
    };
};
