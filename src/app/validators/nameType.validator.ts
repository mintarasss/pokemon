import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const nameTypeValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const name = control.get('name')?.value;
    const type = control.get('type')?.value;

    return name && type && name === type ? {nameTypeSame: true} : null;
  };
}
