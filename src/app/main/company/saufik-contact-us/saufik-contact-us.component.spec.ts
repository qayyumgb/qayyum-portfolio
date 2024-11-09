import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikContactUsComponent } from './saufik-contact-us.component';

describe('SaufikContactUsComponent', () => {
  let component: SaufikContactUsComponent;
  let fixture: ComponentFixture<SaufikContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikContactUsComponent]
    });
    fixture = TestBed.createComponent(SaufikContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
