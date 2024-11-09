import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareDevComponent } from './software-dev/software-dev.component';

const routes: Routes = [
  {
    path:"",
    component:SoftwareDevComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaufikServiceRoutingModule { }
