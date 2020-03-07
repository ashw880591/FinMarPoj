import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CareerComponent } from './career.component';
import { CareerRoutingModule } from './career-routing.module';


@NgModule({
  declarations: [CareerComponent],
  imports: [
    CommonModule,
    CareerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CareerModule { }
