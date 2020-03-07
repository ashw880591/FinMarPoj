import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ResidentialsComponent } from './residentials.component';
import { ResidentialsRoutingModule } from './residentials-routing.module';


@NgModule({
  declarations: [ResidentialsComponent],
  imports: [
    CommonModule,
    ResidentialsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResidentialsModule { }
