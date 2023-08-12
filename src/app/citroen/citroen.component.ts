import { Component, OnInit } from '@angular/core';
import { CarModelsService } from '../car-models.service';

@Component({
  selector: 'app-citroen',
  templateUrl: './citroen.component.html',
  styleUrls: ['./citroen.component.css'],
})
export class CitroenComponent implements OnInit {
  teslaModels: any[] = [];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  filteredModels: any[] = [];

  constructor(private carModelsService: CarModelsService) {}

  ngOnInit(): void {
    this.getTeslaModels();
  }

  getTeslaModels() {
    this.carModelsService.getData().subscribe((data) => {
      this.teslaModels = data
        .filter((model) => model.vehicleMake.toLowerCase() === 'citroen')
        .map((model) => ({
          ...model,
          image: `https://ev-database.continuousnet.com/${model.image}`,
          makerImage: `https://ev-database.continuousnet.com/${model.makerImage}`,
          showMore: false,
        }));

      this.filteredModels = this.teslaModels;
    });
  }

  onSearchQueryChange(event: { query: string; parameter: string }): void {
    const { query, parameter } = event;
    this.filteredModels = this.teslaModels.filter((model) =>
      model[parameter].toLowerCase().includes(query.toLowerCase())
    );
    this.currentPage = 1;
  }

  toggleShowMore(model: any): void {
    model.showMore = !model.showMore;
  }

  getCurrentPageModels(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredModels.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredModels.length / this.itemsPerPage);
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
}
