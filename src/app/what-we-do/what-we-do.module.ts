import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WhatWeDoComponent } from './what-we-do.component';
import { WhatWeDoRoutingModule } from './what-we-do-routing.module';


@NgModule({
  declarations: [WhatWeDoComponent],
  imports: [
    CommonModule,
    WhatWeDoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WhatWeDoModule { }
