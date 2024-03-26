import {Component, Input} from '@angular/core';
import {Pokemon} from "../../data/types";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) data!:Pokemon;

}
