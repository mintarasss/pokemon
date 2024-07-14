import {ChangeDetectionStrategy, Component, input, Input} from '@angular/core';
import {Pokemon} from "../../data/types";
import {TypeElementColorPipe} from "./pipes/type-element-color.pipe";
import {PokemonNumberPipe} from "./pipes/pokemon-number.pipe";
import {NgStyle, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TypeElementColorPipe, PokemonNumberPipe, UpperCasePipe, NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  data = input.required<Pokemon>()
}
