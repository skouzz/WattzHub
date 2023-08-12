import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiaComponent } from './kia.component';

describe('KiaComponent', () => {
  let component: KiaComponent;
  let fixture: ComponentFixture<KiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KiaComponent]
    });
    fixture = TestBed.createComponent(KiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
