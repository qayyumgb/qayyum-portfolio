import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikExpertiseComponent } from './saufik-expertise.component';

describe('SaufikExpertiseComponent', () => {
  let component: SaufikExpertiseComponent;
  let fixture: ComponentFixture<SaufikExpertiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikExpertiseComponent]
    });
    fixture = TestBed.createComponent(SaufikExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
