import {Component, EventEmitter, Output} from '@angular/core';
import {SortKeys} from "../../data/types";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  @Output() sortCriteriaChanged: EventEmitter<SortKeys> = new EventEmitter();

  sortOption: SortKeys = "id";

  constructor() { }

  sort(): void {
    this.sortCriteriaChanged.emit(this.sortOption);
  }
}
