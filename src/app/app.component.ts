import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/pokemon-list">Pokemon List</a>
      <a routerLink="/new-pokemon">New Pokemon</a>
    </nav>
    <router-outlet/>
  `,
})
export class AppComponent {}
