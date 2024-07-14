import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {loadPokemons, loadPokemonsFailure, loadPokemonsSuccess} from "../actions/pokemon.actions";
import {PokemonService} from "../../services/pokemon.service";

@Injectable()
export class PokemonEffects {
  actions$ = inject(Actions)
  pokemonService = inject(PokemonService);

  loadPokemons$ = createEffect(() => this.actions$.pipe(
      ofType(loadPokemons),
      mergeMap(() => this.pokemonService.getAll()
        .pipe(
          tap((data) => console.log({data})),
          map(pokemons => loadPokemonsSuccess({pokemons})),
          catchError(error => of(loadPokemonsFailure({error})))
        ))
    )
  );
}
