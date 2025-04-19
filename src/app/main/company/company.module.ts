import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { WhoWeArePageComponent } from './who-we-are-page/who-we-are-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaufikContactUsComponent } from './saufik-contact-us/saufik-contact-us.component';
import { PortfolioSkillsComponent } from './portfolio-skills/portfolio-skills.component';



@NgModule({
  declarations: [
    WhoWeArePageComponent,
    SaufikContactUsComponent,
    PortfolioSkillsComponent,
    // ContactUsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
