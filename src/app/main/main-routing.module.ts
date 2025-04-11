import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SoftwareDevComponent } from './saufik-service/software-dev/software-dev.component';
import { WebCaseStudiesComponent } from './case-studies/web-case-studies/web-case-studies.component';
import { WhoWeArePageComponent } from './company/who-we-are-page/who-we-are-page.component';
import { SaufikServiceModule } from './saufik-service/saufik-service.module';
import { SaufikServicesComponent } from './home/saufik-services/saufik-services.component';
import { PortfolioSkillsComponent } from './company/portfolio-skills/portfolio-skills.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,

    children:[
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      {path:'projects',pathMatch:'full', component:WebCaseStudiesComponent},
      {path:'about',pathMatch:'full', component:WhoWeArePageComponent},
      {path:'skills',pathMatch:'full', component:PortfolioSkillsComponent},
      { path: 'careers', loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule) },
      { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
      { path: 'case-studies', loadChildren: () => import('./case-studies/case-studies.module').then(m => m.CaseStudiesModule) },
      { path: 'insights', loadChildren: () => import('./insights/insights.module').then(m => m.InsightsModule) },
      { path: 'service/:id', loadChildren: () => import('./saufik-service/saufik-service.module').then(m => m.SaufikServiceModule) },
      { path: '**', redirectTo: '/' }
    ]


  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
