import { TestBed } from '@angular/core/testing';

import { AudiModelsService } from './audi-models.service';

describe('AudiModelsService', () => {
  let service: AudiModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
