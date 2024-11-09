import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeArePageComponent } from './who-we-are-page.component';

describe('WhoWeArePageComponent', () => {
  let component: WhoWeArePageComponent;
  let fixture: ComponentFixture<WhoWeArePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoWeArePageComponent]
    });
    fixture = TestBed.createComponent(WhoWeArePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
