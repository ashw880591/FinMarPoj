import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurProjectComponent } from './our-project.component';



const routes: Routes = [
    {path:'',component:OurProjectComponent} 
        // {path:'dashboard',component:DashboardComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurProjectRoutingModule { }
