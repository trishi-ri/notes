import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreRatingEditorComponent } from './score-rating-editor/score-rating-editor.component';

const COMPONENTS = [ScoreRatingEditorComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
  ]
})
export class ScoreRatingModule {
}
