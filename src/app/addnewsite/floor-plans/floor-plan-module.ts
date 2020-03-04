import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FloorPlansComponent } from './floor-plans.component';
import { FloorPlanRoutingModule } from './floor-plan-routing.module';
@NgModule({
  declarations: [FloorPlansComponent],
  imports: [
    CommonModule,
    FloorPlanRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FloorPlanModule { }
