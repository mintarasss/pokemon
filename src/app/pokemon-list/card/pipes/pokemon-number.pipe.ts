import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pokemonNumber',
  standalone: true,
})
export class PokemonNumberPipe implements PipeTransform {
  transform(id: number): string {
    return String(id).padStart(3, '0')
  }

}
