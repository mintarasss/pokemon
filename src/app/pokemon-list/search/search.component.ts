import {ChangeDetectionStrategy, Component, EventEmitter, output, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {map} from "rxjs";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  searchChange = output<string>();
  searchQuery = new FormControl('');

  constructor() {
    this.searchQuery.valueChanges.pipe(map(data => data || '')).subscribe((value: string) => {
      this.searchChange.emit(value);
    });
  }
}
