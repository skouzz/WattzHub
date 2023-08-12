import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchQuery: string = '';
  searchParameter: string = 'vehicleMake';

  @Output() searchQueryChange: EventEmitter<{ query: string; parameter: string }> = new EventEmitter<{ query: string; parameter: string }>();

  performSearch(): void {
    this.searchQueryChange.emit({ query: this.searchQuery, parameter: this.searchParameter });
  }
}
