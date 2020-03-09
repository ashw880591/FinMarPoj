import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FloorPlansComponent } from './floor-plans.component';
import { FloorPlanRoutingModule } from './floor-plan-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [FloorPlansComponent],
  imports: [
    CommonModule,
    FloorPlanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FloorPlanModule { }
