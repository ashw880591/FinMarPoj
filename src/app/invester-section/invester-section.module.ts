import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InvesterSectionComponent } from './invester-section.component';
import { InvesterSectionRoutingModule } from './invester-section-routing.module';


@NgModule({
  declarations: [InvesterSectionComponent],
  imports: [
    CommonModule,
    InvesterSectionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InvesterSectionModule { }
