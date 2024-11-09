import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikOffshoreStaffingComponent } from './saufik-offshore-staffing.component';

describe('SaufikOffshoreStaffingComponent', () => {
  let component: SaufikOffshoreStaffingComponent;
  let fixture: ComponentFixture<SaufikOffshoreStaffingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikOffshoreStaffingComponent]
    });
    fixture = TestBed.createComponent(SaufikOffshoreStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
