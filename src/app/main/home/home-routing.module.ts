import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HiringDetailComponent } from './hiring-detail/hiring-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'hiring', component: HiringDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
