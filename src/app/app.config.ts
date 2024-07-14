import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {appReducer, pokemonFeatureKey} from "./store/reducers";
import {PokemonEffects} from "./store/effects/pokemon.effects";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      StoreModule.forRoot({}, {}),
      EffectsModule.forRoot([]),
      StoreModule.forFeature(pokemonFeatureKey, appReducer),
      EffectsModule.forFeature([PokemonEffects]),
    )
  ]
};
