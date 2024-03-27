import {AbstractControl, ValidatorFn} from "@angular/forms";
import {colors} from "../data/const";

export const validateType = (): ValidatorFn => {
  return (control: AbstractControl) => {
    return control.value in colors ? null : {invalidColor: true}
  };
}
