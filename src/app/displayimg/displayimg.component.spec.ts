import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayimgComponent } from './displayimg.component';

describe('DisplayimgComponent', () => {
  let component: DisplayimgComponent;
  let fixture: ComponentFixture<DisplayimgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayimgComponent]
    });
    fixture = TestBed.createComponent(DisplayimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
