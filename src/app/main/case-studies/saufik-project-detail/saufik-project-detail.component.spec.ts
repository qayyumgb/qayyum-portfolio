import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikProjectDetailComponent } from './saufik-project-detail.component';

describe('SaufikProjectDetailComponent', () => {
  let component: SaufikProjectDetailComponent;
  let fixture: ComponentFixture<SaufikProjectDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikProjectDetailComponent]
    });
    fixture = TestBed.createComponent(SaufikProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
