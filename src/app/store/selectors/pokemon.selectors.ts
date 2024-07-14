import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState, pokemonFeatureKey} from "../reducers";
import {PokemonState} from "../reducers/pokemon.reducer";


export const selectState = createFeatureSelector<AppState>(pokemonFeatureKey);

export const selectPokemonsState = createSelector(
  selectState,
  (state: AppState) => state.pokemonsState
);

export const selectAllPokemons = createSelector(
  selectPokemonsState,
  (state: PokemonState) => state.pokemons
);

export const selectIsPokemonsLoaded = createSelector(
  selectPokemonsState,
  (state: PokemonState) => !state.loading
);
