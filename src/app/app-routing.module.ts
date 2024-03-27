import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewPokemonFormComponent} from "./new-pokemon-form/new-pokemon-form.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";

const routes: Routes = [
  {path: 'new-pokemon', component: NewPokemonFormComponent},
  {path: 'pokemon-list', component: PokemonListComponent},
  {path: '', redirectTo: '/pokemon-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
