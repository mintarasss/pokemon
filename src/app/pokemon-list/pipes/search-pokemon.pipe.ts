import {Pipe, PipeTransform} from '@angular/core';
import {Pokemon} from "../../data/types";

@Pipe({
  name: 'searchPokemon',
  standalone: true,
})
export class SearchPokemonPipe implements PipeTransform {
  transform(pokemons: Pokemon[], searchQuery: string): Pokemon[] {
    return pokemons.filter((item) => (
      item.id.toString().includes(searchQuery) ||
      item.name.includes(searchQuery) ||
      item.types[0].type.name.includes(searchQuery)
    ))
  }

}
