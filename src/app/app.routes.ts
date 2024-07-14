import { Routes } from '@angular/router';
import {NewPokemonFormComponent} from "./new-pokemon-form/new-pokemon-form.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";

export const routes: Routes = [
  {path: 'new-pokemon', component: NewPokemonFormComponent},
  {path: 'pokemon-list', component: PokemonListComponent},
  {path: '', redirectTo: '/pokemon-list', pathMatch: 'full'},
];
