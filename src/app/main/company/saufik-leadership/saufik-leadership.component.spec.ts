import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikLeadershipComponent } from './saufik-leadership.component';

describe('SaufikLeadershipComponent', () => {
  let component: SaufikLeadershipComponent;
  let fixture: ComponentFixture<SaufikLeadershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikLeadershipComponent]
    });
    fixture = TestBed.createComponent(SaufikLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
