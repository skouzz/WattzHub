import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaComponent } from './tesla.component';

describe('TeslaComponent', () => {
  let component: TeslaComponent;
  let fixture: ComponentFixture<TeslaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeslaComponent]
    });
    fixture = TestBed.createComponent(TeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
