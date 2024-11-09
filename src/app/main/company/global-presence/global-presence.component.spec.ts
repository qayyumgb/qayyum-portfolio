import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPresenceComponent } from './global-presence.component';

describe('GlobalPresenceComponent', () => {
  let component: GlobalPresenceComponent;
  let fixture: ComponentFixture<GlobalPresenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalPresenceComponent]
    });
    fixture = TestBed.createComponent(GlobalPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
