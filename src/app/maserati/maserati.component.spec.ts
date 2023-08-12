import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaseratiComponent } from './maserati.component';

describe('MaseratiComponent', () => {
  let component: MaseratiComponent;
  let fixture: ComponentFixture<MaseratiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaseratiComponent]
    });
    fixture = TestBed.createComponent(MaseratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
