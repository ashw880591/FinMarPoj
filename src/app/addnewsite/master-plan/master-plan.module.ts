import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MasterPlanComponent } from './master-plan.component';
import { MasterPlanRoutingModule } from './master-plan-routing.module';
@NgModule({
  declarations: [MasterPlanComponent],
  imports: [
    CommonModule,
    MasterPlanRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
