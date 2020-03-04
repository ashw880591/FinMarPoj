import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecificationsComponent } from './specifications.component';
import { SpecificationRoutingModule } from './specification-routing.module';
@NgModule({
  declarations: [SpecificationsComponent],
  imports: [
    CommonModule,
    SpecificationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpecificationModule { }
