import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import {Pokemon} from "../data/types";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    const indices = Array.from({length: 26}, (_, i) => i + 1);
    const requests = indices.map(index =>
      this.http.get<Pokemon>(`${this.pokemonsUrl}${index}`));

    return forkJoin(requests);
  }
}
