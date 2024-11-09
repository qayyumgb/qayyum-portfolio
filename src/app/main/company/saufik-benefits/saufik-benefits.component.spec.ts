import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikBenefitsComponent } from './saufik-benefits.component';

describe('SaufikBenefitsComponent', () => {
  let component: SaufikBenefitsComponent;
  let fixture: ComponentFixture<SaufikBenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikBenefitsComponent]
    });
    fixture = TestBed.createComponent(SaufikBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
