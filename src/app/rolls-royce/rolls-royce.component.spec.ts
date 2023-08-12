import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollsRoyceComponent } from './rolls-royce.component';

describe('RollsRoyceComponent', () => {
  let component: RollsRoyceComponent;
  let fixture: ComponentFixture<RollsRoyceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RollsRoyceComponent]
    });
    fixture = TestBed.createComponent(RollsRoyceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
