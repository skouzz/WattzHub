// audi-models.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AudiModelsService {
  private modelsUrl = 'assets/models.json';

  constructor(private http: HttpClient) {}

  getAudiModels(): Observable<any[]> {
    return this.http.get<any[]>(this.modelsUrl).pipe(
      map((data: any[]) => data.filter(item => item.vehicleMake === 'Audi'))
    );
  }
}
