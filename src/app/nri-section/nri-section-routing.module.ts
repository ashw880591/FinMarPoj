import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NriSectionComponent } from './nri-section.component';



const routes: Routes = [
  { path: '', component: NriSectionComponent }
  // {path:'dashboard',component:DashboardComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NriSectionRoutingModule { }
