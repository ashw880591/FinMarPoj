import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NriSectionComponent } from './nri-section.component';
import { NriSectionRoutingModule } from './nri-section-routing.module';


@NgModule({
  declarations: [NriSectionComponent],
  imports: [
    CommonModule,
    NriSectionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NriSectionModule { }
