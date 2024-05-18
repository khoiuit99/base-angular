import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

const ListModule = [
  ButtonModule,
  DialogModule,
  InputTextareaModule,
  InputNumberModule,
  RadioButtonModule,
  CheckboxModule,
  InputTextModule,
  DropdownModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ListModule],
  exports: [ListModule],
})
export class PrimengModule {}
