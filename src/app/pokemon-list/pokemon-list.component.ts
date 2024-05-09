import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadPokemons} from "../store/actions/pokemon.actions";
import {selectAllPokemons, selectIsPokemonsLoaded} from "../store/selectors/pokemon.selectors";
import {SortKeys} from "../data/types";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  store = inject(Store);
  pokemons = this.store.selectSignal(selectAllPokemons);
  isLoaded = this.store.selectSignal(selectIsPokemonsLoaded);

  searchQuery = '';
  sortKey:SortKeys = 'id';

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
