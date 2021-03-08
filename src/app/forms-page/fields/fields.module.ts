import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from './text-field/text-field.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberFieldComponent } from './number-field/number-field.component';

const COMPONENTS = [
  TextFieldComponent,
  NumberFieldComponent,
];

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ]
})
export class FieldsModule { }
