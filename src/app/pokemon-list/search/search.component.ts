import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(): void {
    this.searchChange.emit(this.searchQuery);
  }
}
