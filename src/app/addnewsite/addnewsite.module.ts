import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddnewsiteComponent } from './addnewsite.component';
import { AddNewSiteRoutingModule } from './addnewsite-routing.module';
@NgModule({
  declarations: [AddnewsiteComponent],
  imports: [
    CommonModule,
    AddNewSiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddNewSiteModule { }
