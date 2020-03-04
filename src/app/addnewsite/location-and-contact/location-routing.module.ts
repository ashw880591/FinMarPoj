import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationAndContactComponent } from './location-and-contact.component';


const routes: Routes = [
    {path:'',component:LocationAndContactComponent} 
    
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationAndContactRoutingModule { }
