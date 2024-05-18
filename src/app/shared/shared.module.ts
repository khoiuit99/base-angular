import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../core/primeng/primeng.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
