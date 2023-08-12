import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaradayComponent } from './faraday.component';

describe('FaradayComponent', () => {
  let component: FaradayComponent;
  let fixture: ComponentFixture<FaradayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaradayComponent]
    });
    fixture = TestBed.createComponent(FaradayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
