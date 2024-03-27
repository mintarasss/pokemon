import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {colors} from "../data/const";

@Directive({
  selector: '[appValidType]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidTypeDirective, multi: true}]
})
export class ValidTypeDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value in colors) {
      return null;
    } else {
      return {invalidColor: true};
    }
  }
}
