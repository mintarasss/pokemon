import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() searchChange = new EventEmitter<string>();

  searchQuery = new FormControl('');

  constructor() {
    this.searchQuery.valueChanges.pipe(map(data => data || '')).subscribe((value: string) => {
      this.searchChange.emit(value);
    });
  }
}
