import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OurProjectComponent } from './our-project.component';
import { OurProjectRoutingModule } from './our-project-routing.module';


@NgModule({
  declarations: [OurProjectComponent],
  imports: [
    CommonModule,
    OurProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OurProjectModule { }
