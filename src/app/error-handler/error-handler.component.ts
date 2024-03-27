import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.css'
})
export class ErrorHandlerComponent {
  @Input({required: true}) control!: AbstractControl | null;
}
