import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-searchhome',
  templateUrl: './searchhome.component.html',
  styleUrls: ['./searchhome.component.css']
})
export class SearchhomeComponent {
  searchQuery: string = '';
  searchParameter: string = 'vehicleMake'; // Default search parameter is 'Vehicle Make'

  @Output() searchQueryChange: EventEmitter<{ query: string; parameter: string }> = new EventEmitter<{ query: string; parameter: string }>();

  constructor(private router: Router) {} // Inject Router

  performSearch(): void {
    this.searchQueryChange.emit({ query: this.searchQuery, parameter: this.searchParameter });

    // Navigate to search-results page with query parameters
    this.router.navigate(['/search-results'], {
      queryParams: { query: this.searchQuery, parameter: this.searchParameter }
    });
  }
}
