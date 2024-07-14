import {Pipe, PipeTransform} from '@angular/core';
import {Pokemon, SortKeys} from "../../data/types";

@Pipe({
  name: 'sortPokemon',
  standalone: true,
})
export class SortPokemonPipe implements PipeTransform {
  transform(pokemons: Pokemon[], sortKey: SortKeys): Pokemon[] {
    return pokemons.sort(function (a, b) {
      const x = a[sortKey];
      const y = b[sortKey];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

}
