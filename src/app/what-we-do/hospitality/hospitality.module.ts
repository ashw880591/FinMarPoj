import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HospitalityComponent } from './hospitality.component';
import { HospitalityRoutingModule } from './hospitality-routing.module';


@NgModule({
  declarations: [HospitalityComponent],
  imports: [
    CommonModule,
    HospitalityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HospitalityModule { }
