import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortKeys } from "../../data/types";
import {filter} from "rxjs";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  @Output() sortCriteriaChanged: EventEmitter<SortKeys> = new EventEmitter();
  sortOption = new FormControl<SortKeys>('id');

  constructor() {
    this.sortOption.valueChanges.pipe(filter(Boolean)).subscribe((newValue) => {
      this.sortCriteriaChanged.emit(newValue);
    });
  }
}
