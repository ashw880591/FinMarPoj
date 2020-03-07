import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OurprojectnameComponent } from './ourprojectname.component';
import { OurProjectNameRoutingModule } from './ourprojectname-routing.module';


@NgModule({
  declarations: [OurprojectnameComponent],
  imports: [
    CommonModule,
    OurProjectNameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OurProjectNameModule { }
