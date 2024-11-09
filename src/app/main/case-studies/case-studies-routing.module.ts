import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebCaseStudiesComponent } from './web-case-studies/web-case-studies.component';
import { SaufikProjectDetailComponent } from './saufik-project-detail/saufik-project-detail.component';
import { MobileAppsCasesComponent } from './mobile-apps-cases/mobile-apps-cases.component';
import { UiuxCaseStudiesComponent } from './uiux-case-studies/uiux-case-studies.component';
import { MobileProjectsDetailComponent } from './mobile-projects-detail/mobile-projects-detail.component';

const routes: Routes = [
  {
    path:"web-development", component :WebCaseStudiesComponent
  },
  {
    path:"mob-apps", component :MobileAppsCasesComponent
  },
  {
    path:"uiux", component :UiuxCaseStudiesComponent
  },
  {
     path: 'detail/:id', component :SaufikProjectDetailComponent
  },
  {
    path: 'app-detail/:id', component :MobileProjectsDetailComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudiesRoutingModule { }
