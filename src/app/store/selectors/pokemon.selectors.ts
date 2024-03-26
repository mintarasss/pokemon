import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState, pokemonFeatureKey} from "../reducers";


export const selectState = createFeatureSelector<AppState>(pokemonFeatureKey);

export const selectPokemonsState = createSelector(
  selectState,
  (state: AppState) => state.pokemonsState
);

export const selectAllPokemons = createSelector(
  selectPokemonsState,
  (state) => state.pokemons
);

export const selectIsPokemonsLoaded = createSelector(
  selectPokemonsState,
  (state) => !state.loading
);
