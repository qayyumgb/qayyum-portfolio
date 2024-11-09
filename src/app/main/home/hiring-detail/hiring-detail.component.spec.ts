import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringDetailComponent } from './hiring-detail.component';

describe('HiringDetailComponent', () => {
  let component: HiringDetailComponent;
  let fixture: ComponentFixture<HiringDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringDetailComponent]
    });
    fixture = TestBed.createComponent(HiringDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
