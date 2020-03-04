import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocationAndContactComponent } from './location-and-contact.component';
import { LocationAndContactRoutingModule } from './location-routing.module';
@NgModule({
  declarations: [LocationAndContactComponent],
  imports: [
    CommonModule,
    LocationAndContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LocationModule { }
