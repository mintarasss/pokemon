import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Pokemon} from "../data/types";
import {colors} from "../data/const";
import {validateType} from "../validators/valid-type.validator";
import {idNotInListValidator} from "../validators/not-in-list.validator";
import {ErrorHandlerComponent} from "../error-handler/error-handler.component";
import {CardComponent} from "../pokemon-list/card/card.component";
import {JsonPipe} from "@angular/common";
import {nameTypeValidator} from "../validators/name-type.validator";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

type FormFields = { name: string; id: number; type: string; imageLink: string; };

@Component({
  selector: 'app-new-pokemon-form',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorHandlerComponent, CardComponent, JsonPipe],
  templateUrl: './new-pokemon-form.component.html',
  styleUrl: './new-pokemon-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPokemonFormComponent {
  examplePokemon = this.makePokemon({
    name: 'pikachu',
    id: 25,
    type: 'electric',
    imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  });
  list: Pokemon[] = [];
  pokemonForm = this.crateForm();

  constructor(private cdRef: ChangeDetectorRef) {
    this.pokemonForm.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this.cdRef.markForCheck()
    })
  }

  onSubmit(): void {
    this.list.push(this.makePokemon(this.pokemonForm.value as Partial<FormFields>));
    this.pokemonForm.reset();
    this.updateFormIdValidator();
  }

  onTakeALook(): void {
    this.examplePokemon = this.makePokemon(this.pokemonForm.value as Partial<FormFields>);
  }

  private makePokemon({name, id, type, imageLink}: Partial<FormFields>): Pokemon {
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
    }, {validators: [nameTypeValidator()]})
  }

  private updateFormIdValidator() {
    this.pokemonForm.get('id')?.setValidators([
      Validators.required,
      idNotInListValidator(this.list)
    ]);
  }
}
