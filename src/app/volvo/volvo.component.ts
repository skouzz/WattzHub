import { Component, OnInit } from '@angular/core';
import { CarModelsService } from '../car-models.service';

@Component({
  selector: 'app-volvo',
  templateUrl: './volvo.component.html',
  styleUrls: ['./volvo.component.css'],
})
export class VolvoComponent implements OnInit {
  teslaModels: any[] = [];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  searchQuery: string = '';
  searchParameter: string = 'vehicleMake';

  constructor(private carModelsService: CarModelsService) {}

  ngOnInit(): void {
    this.getTeslaModels();
  }

  getTeslaModels() {
    this.carModelsService.getData().subscribe((data) => {
      this.teslaModels = data
        .filter((model) => model.vehicleMake.toLowerCase() === 'volvo')
        .map((model) => ({
          ...model,
          image: `https://ev-database.continuousnet.com/${model.image}`,
          makerImage: `https://ev-database.continuousnet.com/${model.makerImage}`,
          showMore: false,
        }));
    });
  }

  toggleShowMore(model: any): void {
    model.showMore = !model.showMore;
  }

  getCurrentPageModels(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.teslaModels.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getTotalPages(): number {
    return Math.ceil(this.teslaModels.length / this.itemsPerPage);
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  // New method to handle the search event
  handleVolvoSearch(event: { query: string; parameter: string }): void {
    this.searchQuery = event.query;
    this.searchParameter = event.parameter;
    this.currentPage = 1; // Reset current page to 1
    this.getTeslaModels(); // Fetch the filtered car models
  }
}
