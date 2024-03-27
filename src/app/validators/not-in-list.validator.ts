import {AbstractControl, ValidatorFn} from "@angular/forms";
import {Pokemon} from "../data/types";

export const idNotInListValidator = (list: Pokemon[]): ValidatorFn => {
  return (control: AbstractControl) => {
    const forbidden = list.some(pokemon => Number(pokemon.id) === Number(control.value));
    return forbidden ? {idInList: {value: control.value}} : null;
  };
}
