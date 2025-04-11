import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSkillsComponent } from './portfolio-skills.component';

describe('PortfolioSkillsComponent', () => {
  let component: PortfolioSkillsComponent;
  let fixture: ComponentFixture<PortfolioSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioSkillsComponent]
    });
    fixture = TestBed.createComponent(PortfolioSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
