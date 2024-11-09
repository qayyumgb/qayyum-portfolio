import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersOpportunitiesComponent } from './careers-opportunities/careers-opportunities.component';
import { OpportunitiesDetailComponent } from './opportunities-detail/opportunities-detail.component';
import { SaufikLifeComponent } from './saufik-life/saufik-life.component';

const routes: Routes = [
  {path:'', component : CareersOpportunitiesComponent},
  {path:'details/:id', component : OpportunitiesDetailComponent},
  {path:'saufikLife', component : SaufikLifeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
