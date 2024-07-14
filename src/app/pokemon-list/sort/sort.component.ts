import {ChangeDetectionStrategy, Component, EventEmitter, output, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SortKeys} from "../../data/types";
import {filter} from "rxjs";

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent {
  sortCriteriaChanged = output<SortKeys>();
  sortOption = new FormControl<SortKeys>('id');

  constructor() {
    this.sortOption.valueChanges.pipe(filter(Boolean)).subscribe((newValue) => {
      this.sortCriteriaChanged.emit(newValue);
    });
  }
}
