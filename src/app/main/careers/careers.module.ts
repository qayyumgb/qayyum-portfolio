import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersOpportunitiesComponent } from './careers-opportunities/careers-opportunities.component';
import { OpportunitiesDetailComponent } from './opportunities-detail/opportunities-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaufikLifeComponent } from './saufik-life/saufik-life.component';


@NgModule({
  declarations: [
    CareersOpportunitiesComponent,
    OpportunitiesDetailComponent,
    SaufikLifeComponent,

  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    SharedModule
  ]
})
export class CareersModule { }
