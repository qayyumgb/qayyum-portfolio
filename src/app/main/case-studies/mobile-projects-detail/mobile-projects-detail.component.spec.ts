import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProjectsDetailComponent } from './mobile-projects-detail.component';

describe('MobileProjectsDetailComponent', () => {
  let component: MobileProjectsDetailComponent;
  let fixture: ComponentFixture<MobileProjectsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileProjectsDetailComponent]
    });
    fixture = TestBed.createComponent(MobileProjectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
