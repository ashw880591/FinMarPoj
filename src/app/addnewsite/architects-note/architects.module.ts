import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArchitectsNoteComponent } from './architects-note.component';
import { ArchitectsRoutingModule } from './architects-routing.module';
@NgModule({
  declarations: [ArchitectsNoteComponent],
  imports: [
    CommonModule,
    ArchitectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArchitectsModule { }
