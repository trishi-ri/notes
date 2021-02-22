import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ScoreRatingEditorComponent } from './score-rating-editor/score-rating-editor.component';

const COMPONENTS = [ScoreRatingEditorComponent];

const MATERIAL_MODULES = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ]
})
export class ScoreRatingModule {
}
