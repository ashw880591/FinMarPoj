import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurProjectComponent } from '../our-project/our-project.component';
import { OurprojectnameComponent } from './ourprojectname.component';



const routes: Routes = [
  { path: '', component: OurprojectnameComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurProjectNameRoutingModule { }
