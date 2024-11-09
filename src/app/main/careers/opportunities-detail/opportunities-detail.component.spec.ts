import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesDetailComponent } from './opportunities-detail.component';

describe('OpportunitiesDetailComponent', () => {
  let component: OpportunitiesDetailComponent;
  let fixture: ComponentFixture<OpportunitiesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunitiesDetailComponent]
    });
    fixture = TestBed.createComponent(OpportunitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
