import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhoWeArePageComponent } from './who-we-are-page/who-we-are-page.component';
import { SaufikContactUsComponent } from './saufik-contact-us/saufik-contact-us.component';

const routes: Routes = [
  {
    path:"who-we-are", component :WhoWeArePageComponent
  },
  {
    path:"contact-us", component :SaufikContactUsComponent
  }

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
