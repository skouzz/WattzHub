import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModelsService } from '../car-models.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  filteredModels: any[] = [];
  searchQuery: string = '';
  searchParameter: string = 'vehicleMake';

  constructor(
    private route: ActivatedRoute,
    private carModelsService: CarModelsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'];
      this.searchParameter = params['parameter'];
      this.performSearch(this.searchQuery, this.searchParameter);
    });
  }

  performSearch(searchQuery: string, parameter: string): void {
    this.carModelsService.getData().subscribe((data) => {
      this.filteredModels = data
        .map((model) => ({
          ...model,
          image: `https://ev-database.continuousnet.com/${model.image}`,
          makerImage: `https://ev-database.continuousnet.com/${model.makerImage}`,
          showMore: false,
        }))
        .filter((model) =>
          this.containsSearchQuery(model, searchQuery, parameter)
        );
    });
  }

  containsSearchQuery(
    model: any,
    searchQuery: string,
    parameter: string
  ): boolean {
    const value = model[parameter]?.toString().toLowerCase();
    return value ? value.includes(searchQuery.toLowerCase()) : false;
  }

  toggleShowMore(model: any): void {
    model.showMore = !model.showMore;
  }
}
