import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ScoreRatingEditorComponent } from './score-rating-editor/score-rating-editor.component';
import { ScoreRatingEditorElementComponent } from './score-rating-editor/score-rating-editor-element/score-rating-editor-element.component';
import { ScoreRatingEditorListComponent } from './score-rating-editor/score-rating-editor-list/score-rating-editor-list.component';
import { MatCardModule } from '@angular/material/card';

const COMPONENTS = [
  ScoreRatingEditorComponent,
  ScoreRatingEditorElementComponent,
  ScoreRatingEditorListComponent
];

const MATERIAL_MODULES = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule
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
export class ScoreRatingModule {
}
