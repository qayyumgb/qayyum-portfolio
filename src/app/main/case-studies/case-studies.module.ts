import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebCaseStudiesComponent } from './web-case-studies/web-case-studies.component';
import { SaufikProjectDetailComponent } from './saufik-project-detail/saufik-project-detail.component';
import { MobileAppsCasesComponent } from './mobile-apps-cases/mobile-apps-cases.component';
import { UiuxCaseStudiesComponent } from './uiux-case-studies/uiux-case-studies.component';
import { MobileProjectsDetailComponent } from './mobile-projects-detail/mobile-projects-detail.component';


@NgModule({
  declarations: [
    WebCaseStudiesComponent,
    SaufikProjectDetailComponent,
    MobileAppsCasesComponent,
    UiuxCaseStudiesComponent,
    MobileProjectsDetailComponent
  ],
  imports: [
    CommonModule,
    CaseStudiesRoutingModule,
    SharedModule
  ]
})
export class CaseStudiesModule { }
