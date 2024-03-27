import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {CardComponent} from './pokemon-list/card/card.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {PokemonEffects} from "./store/effects/pokemon.effects";
import {HttpClientModule} from "@angular/common/http";
import {appReducer, pokemonFeatureKey} from "./store/reducers";
import {TypeElementColorPipe} from "./pokemon-list/card/pipes/type-element-color.pipe";
import {PokemonNumberPipe} from "./pokemon-list/card/pipes/pokemon-number.pipe";
import {SearchComponent} from './pokemon-list/search/search.component';
import {FormsModule} from "@angular/forms";
import {SearchPokemonPipe} from "./pokemon-list/pipes/search-pokemon.pipe";
import {SortComponent} from './pokemon-list/sort/sort.component';
import {SortPokemonPipe} from "./pokemon-list/pipes/sort-pokemon.pipe";
import {NewPokemonFormComponent} from './new-pokemon-form/new-pokemon-form.component';
import {ValidTypeDirective} from './validators/valid-type.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    CardComponent,
    TypeElementColorPipe,
    PokemonNumberPipe,
    SearchComponent,
    SearchPokemonPipe,
    SortComponent,
    SortPokemonPipe,
    NewPokemonFormComponent,
    ValidTypeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(pokemonFeatureKey, appReducer),
    EffectsModule.forFeature([PokemonEffects]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
