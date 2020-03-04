import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPlanComponent } from './master-plan.component';


const routes: Routes = [
    {path:'',component:MasterPlanComponent} 
    
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPlanRoutingModule { }
