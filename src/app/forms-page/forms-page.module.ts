import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsPageComponent } from './forms-page.component';
import { FormsPageRoutingModule } from './forms-page.routing.module';
import { ScoreRatingModule } from './score-rating/score-rating.module';

@NgModule({
  declarations: [FormsPageComponent],
  imports: [
    CommonModule,
    FormsPageRoutingModule,
    MatGridListModule,
    ScoreRatingModule
  ]
})
export class FormsPageModule {
}
