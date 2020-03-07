import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResidentialsComponent } from './residentials.component';



const routes: Routes = [
  { path: '', component: ResidentialsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentialsRoutingModule { }
