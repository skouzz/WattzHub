import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AudiComponent } from './audi/audi.component'; // Make sure to import the AudiComponent


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElectricalCar';
  onSearch(searchTerm: string): void {
    // Perform your search logic here
    console.log('Search term:', searchTerm);
    // You can update the search results based on the search term.
  }

}
