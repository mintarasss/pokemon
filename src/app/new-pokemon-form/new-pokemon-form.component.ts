import {Component} from '@angular/core';
import {Pokemon} from "../data/types";
import {colors} from "../data/const";

type FormFields = { name: string, id: number, type: string, imageLink: string }

@Component({
  selector: 'app-new-pokemon-form',
  templateUrl: './new-pokemon-form.component.html',
  styleUrl: './new-pokemon-form.component.css'
})
export class NewPokemonFormComponent {
  examplePokemon = this.makePokemon({
    name: 'pikachu',
    id: 25,
    type: 'electric',
    imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  });

  onSubmit(form: { value: FormFields }): void {
    console.log('Form Data: ', form.value);
    this.examplePokemon = this.makePokemon(form.value);
  }

  makePokemon({name, id, type, imageLink}: FormFields): Pokemon {
    return {
      id,
      name,
      types: [{type: {name: type as keyof typeof colors}}],
      sprites: {front_default: imageLink},
    };
  }
}
