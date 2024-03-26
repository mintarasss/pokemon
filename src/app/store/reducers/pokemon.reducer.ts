import { createReducer, on } from '@ngrx/store';
import {loadPokemons, loadPokemonsFailure, loadPokemonsSuccess} from "../actions/pokemon.actions";
import {Pokemon} from "../../data/types";


export interface PokemonState {
  pokemons: Pokemon[];
  error: unknown;
  loading: boolean;
}

export const initialState: PokemonState = {
  pokemons: [],
  error: null,
  loading: false,
};

export const pokemonReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => ({...state, loading: true})),
  on(loadPokemonsSuccess, (state, {pokemons}) => ({
    ...state,
    pokemons,
    loading: false,
  })),
  on(loadPokemonsFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false,
  }))
);

