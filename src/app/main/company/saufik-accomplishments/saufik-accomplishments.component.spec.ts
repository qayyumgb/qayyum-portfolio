import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaufikAccomplishmentsComponent } from './saufik-accomplishments.component';

describe('SaufikAccomplishmentsComponent', () => {
  let component: SaufikAccomplishmentsComponent;
  let fixture: ComponentFixture<SaufikAccomplishmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaufikAccomplishmentsComponent]
    });
    fixture = TestBed.createComponent(SaufikAccomplishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
