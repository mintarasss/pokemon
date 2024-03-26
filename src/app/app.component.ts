import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-new-pokemon-form/>
    <app-pokemon-list/>
  `,
})
export class AppComponent {}
