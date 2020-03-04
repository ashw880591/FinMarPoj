import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title.component';


const routes: Routes = [
    {path:'',component:TitleComponent} 
        // {path:'dashboard',component:DashboardComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitleRoutingModule { }
