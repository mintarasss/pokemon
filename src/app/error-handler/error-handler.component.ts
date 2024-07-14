import {ChangeDetectionStrategy, Component, input, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {ErrorMessagePipe} from "./error-message.pipe";

@Component({
  selector: 'app-error-handler',
  standalone: true,
  imports: [ErrorMessagePipe],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.css',
})
export class ErrorHandlerComponent {
  control = input.required<AbstractControl | null>()
}
