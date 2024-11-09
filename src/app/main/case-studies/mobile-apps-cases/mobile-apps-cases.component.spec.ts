import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppsCasesComponent } from './mobile-apps-cases.component';

describe('MobileAppsCasesComponent', () => {
  let component: MobileAppsCasesComponent;
  let fixture: ComponentFixture<MobileAppsCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAppsCasesComponent]
    });
    fixture = TestBed.createComponent(MobileAppsCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
