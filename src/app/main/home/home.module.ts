import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SaufikServicesComponent } from './saufik-services/saufik-services.component';
import { SaufikOffshoreStaffingComponent } from './saufik-offshore-staffing/saufik-offshore-staffing.component';
import { SaufikExpertiseComponent } from './saufik-expertise/saufik-expertise.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HiringDetailComponent } from './hiring-detail/hiring-detail.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SaufikServicesComponent,
    SaufikOffshoreStaffingComponent,
    // ContactUsComponent,
    SaufikExpertiseComponent,
    HiringDetailComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule

  ],
  exports: [
    SaufikServicesComponent
  ]
})
export class HomeModule { }
