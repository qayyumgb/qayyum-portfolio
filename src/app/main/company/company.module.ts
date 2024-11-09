import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { SaufikAccomplishmentsComponent } from './saufik-accomplishments/saufik-accomplishments.component';
import { SaufikLeadershipComponent } from './saufik-leadership/saufik-leadership.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';
import { WhoWeArePageComponent } from './who-we-are-page/who-we-are-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaufikBenefitsComponent } from './saufik-benefits/saufik-benefits.component';
import { SaufikContactUsComponent } from './saufik-contact-us/saufik-contact-us.component';



@NgModule({
  declarations: [
    SaufikAccomplishmentsComponent,
    SaufikLeadershipComponent,
    GlobalPresenceComponent,
    WhoWeArePageComponent,
    SaufikBenefitsComponent,
    SaufikContactUsComponent,
    // ContactUsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
