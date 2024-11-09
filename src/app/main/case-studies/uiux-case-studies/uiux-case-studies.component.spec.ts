import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiuxCaseStudiesComponent } from './uiux-case-studies.component';

describe('UiuxCaseStudiesComponent', () => {
  let component: UiuxCaseStudiesComponent;
  let fixture: ComponentFixture<UiuxCaseStudiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiuxCaseStudiesComponent]
    });
    fixture = TestBed.createComponent(UiuxCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
