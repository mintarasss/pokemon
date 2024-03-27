import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Pokemon} from "../data/types";
import {colors} from "../data/const";
import {validateType} from "../validators/valid-type.validator";

type FormFields = { name: string; id: number; type: string; imageLink: string; };

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

  pokemonForm = this.crateForm();

  onSubmit(): void {
    console.log('Form Data: ', this.pokemonForm.value);
    this.examplePokemon = this.makePokemon(this.pokemonForm.value as Partial<FormFields>);
  }

  makePokemon({name, id, type, imageLink}: Partial<FormFields>): Pokemon {
    return {
      id: id || 0,
      name: name || '',
      types: [{type: {name: type as keyof typeof colors}}],
      sprites: {front_default: imageLink || ''},
    };
  }

  private crateForm() {
    return new FormGroup({
      id: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required, validateType()]),
      name: new FormControl('', [Validators.required]),
      imageLink: new FormControl('', [Validators.required]),
    })
  }
}
