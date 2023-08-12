import { Component, OnInit } from '@angular/core';
import { CarModelsService } from '../car-models.service';

@Component({
  selector: 'app-maserati',
  templateUrl: './rolls-royce.component.html',
  styleUrls: ['./rolls-royce.component.css'],
})
export class RollsRoyceComponent implements OnInit {
  teslaModels: any[] = [];
  itemsPerPage: number = 10;
  currentPage: number = 1;

  constructor(private carModelsService: CarModelsService) {}

  ngOnInit(): void {
    this.getTeslaModels();
  }

  getTeslaModels() {
    this.carModelsService.getData().subscribe((data) => {
      this.teslaModels = data
        .filter((model) => model.vehicleMake.toLowerCase() === 'rolls-royce')
        .map((model) => ({
          ...model,
          image: `https://ev-database.continuousnet.com/${model.image}`, // Update the image URL
          makerImage: `https://ev-database.continuousnet.com/${model.makerImage}`, // Update the maker image URL
          showMore: false, // Initialize showMore property for each car model
        }));
    });
  }

  // Function to toggle the "Show More" button for each car model
  toggleShowMore(model: any): void {
    model.showMore = !model.showMore;
  }

  // Function to get the current page's models
  getCurrentPageModels(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.teslaModels.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Function to get the total number of pages
  getTotalPages(): number {
    return Math.ceil(this.teslaModels.length / this.itemsPerPage);
  }

  // Function to generate an array of page numbers
  getPageNumbers(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }

  // Function to navigate to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Function to navigate to the next page
  nextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }
}
