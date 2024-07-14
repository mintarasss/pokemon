import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadPokemons} from "../store/actions/pokemon.actions";
import {selectAllPokemons, selectIsPokemonsLoaded} from "../store/selectors/pokemon.selectors";
import {SortKeys} from "../data/types";
import {SearchComponent} from "./search/search.component";
import {SortComponent} from "./sort/sort.component";
import {CardComponent} from "./card/card.component";
import {SearchPokemonPipe} from "./pipes/search-pokemon.pipe";
import {SortPokemonPipe} from "./pipes/sort-pokemon.pipe";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [SearchComponent, SortComponent, CardComponent, SearchPokemonPipe, SortPokemonPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {
  store = inject(Store);
  pokemons = this.store.selectSignal(selectAllPokemons);
  isLoaded = this.store.selectSignal(selectIsPokemonsLoaded);

  searchQuery = '';
  sortKey: SortKeys = 'id';

  ngOnInit() {
    this.store.dispatch(loadPokemons());
  }

  handleSearchChange(searchQuery: string) {
    console.log('Search query:', searchQuery);
    this.searchQuery = searchQuery;
  }

  handleSortChange(sortKey: SortKeys) {
    console.log('Sort key:', sortKey);
    this.sortKey = sortKey;
  }
}
