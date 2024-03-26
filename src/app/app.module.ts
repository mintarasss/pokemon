import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CardComponent } from './pokemon-list/card/card.component';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {PokemonEffects} from "./store/effects/pokemon.effects";
import {HttpClientModule} from "@angular/common/http";
import {appReducer, pokemonFeatureKey} from "./store/reducers";
import {TypeElementColorPipe} from "./pokemon-list/card/pipes/type-element-color.pipe";
import {PokemonNumberPipe} from "./pokemon-list/card/pipes/pokemon-number.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    CardComponent,
    TypeElementColorPipe,
    PokemonNumberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(pokemonFeatureKey, appReducer),
    EffectsModule.forFeature([PokemonEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
