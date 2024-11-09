import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCaseStudiesComponent } from './web-case-studies.component';

describe('WebCaseStudiesComponent', () => {
  let component: WebCaseStudiesComponent;
  let fixture: ComponentFixture<WebCaseStudiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebCaseStudiesComponent]
    });
    fixture = TestBed.createComponent(WebCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
