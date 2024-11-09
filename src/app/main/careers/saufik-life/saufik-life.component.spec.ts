import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikLifeComponent } from './saufik-life.component';

describe('SaufikLifeComponent', () => {
  let component: SaufikLifeComponent;
  let fixture: ComponentFixture<SaufikLifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikLifeComponent]
    });
    fixture = TestBed.createComponent(SaufikLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
