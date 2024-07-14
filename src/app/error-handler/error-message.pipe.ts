import {Pipe, PipeTransform} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Pipe({
  name: 'errorMessage',
  standalone: true,
})
export class ErrorMessagePipe implements PipeTransform {
  readonly errorMessages: { [key: string]: string } = {
    required: 'Input is required',
    invalidColor: 'Invalid type select',
    idInList: 'ID is already in use'
  }

  transform(value: ValidationErrors | null | undefined): string | undefined {
    if (!value) {
      return undefined;
    }

    const errors = Object.keys(value).map((key) => this.errorMessages[key]).filter(Boolean);

    return errors.at(0);
  }

}
