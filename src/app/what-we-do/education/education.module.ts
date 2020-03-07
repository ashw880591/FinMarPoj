import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EducationComponent } from './education.component';
import { EducationRoutingModule } from './education-routing.module';


@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    EducationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EducationModule { }
