import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsPageComponent } from './forms-page.component';
import { FormsPageRoutingModule } from './forms-page.routing.module';
import { ScoreRatingModule } from './score-rating/score-rating.module';

const MATERIAL_MODULES = [
  MatGridListModule,
];

@NgModule({
  declarations: [FormsPageComponent],
  imports: [
    CommonModule,
    FormsPageRoutingModule,
    ScoreRatingModule,
    ...MATERIAL_MODULES
  ]
})
export class FormsPageModule {
}
