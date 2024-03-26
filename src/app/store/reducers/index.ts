import {pokemonReducer, PokemonState} from "./pokemon.reducer";
import {ActionReducerMap} from "@ngrx/store";

export const pokemonFeatureKey = 'pokemonFeatureKey';

export interface AppState {
  pokemonsState: PokemonState;
}
export const appReducer:ActionReducerMap<AppState> = {
  pokemonsState: pokemonReducer
}
