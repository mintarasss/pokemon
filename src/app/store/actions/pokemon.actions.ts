import {createAction, props} from '@ngrx/store';
import {Pokemon} from "../../data/types";

export const loadPokemons = createAction('[Pokemon Page] Load Pokemons');

export const loadPokemonsSuccess = createAction(
  '[Pokemon API] Pokemons Load Success',
  props<{ pokemons: Pokemon[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Pokemon API] Pokemons Load Failure',
  props<{ error: unknown }>()
);
