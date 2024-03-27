import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/pokemon-list">Pokemon List</a>
      <a routerLink="/new-pokemon">New Pokemon</a>
    </nav>
    <router-outlet/>
  `,
})
export class AppComponent {}
