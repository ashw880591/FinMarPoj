import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvesterSectionComponent } from './invester-section.component';



const routes: Routes = [
  { path: '', component: InvesterSectionComponent }
  // {path:'dashboard',component:DashboardComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvesterSectionRoutingModule { }
