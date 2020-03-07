import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WhoWeAreComponent } from './who-we-are.component';
import { WhoWeAreRoutingModule } from './who-we-are-routing.module';



@NgModule({
  declarations: [WhoWeAreComponent],
  imports: [
    CommonModule,
    WhoWeAreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WhoWeAreModule { }
