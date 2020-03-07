import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IndustrialComponent } from './industrial.component';
import { IndustrialRoutingModule } from './industrial-routing.module';


@NgModule({
  declarations: [IndustrialComponent],
  imports: [
    CommonModule,
    IndustrialRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IndustrialModule { }
