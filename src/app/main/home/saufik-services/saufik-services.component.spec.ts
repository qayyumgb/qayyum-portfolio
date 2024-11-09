import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikServicesComponent } from './saufik-services.component';

describe('SaufikServicesComponent', () => {
  let component: SaufikServicesComponent;
  let fixture: ComponentFixture<SaufikServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikServicesComponent]
    });
    fixture = TestBed.createComponent(SaufikServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
