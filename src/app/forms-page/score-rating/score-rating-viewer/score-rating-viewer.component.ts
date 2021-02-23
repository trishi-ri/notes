import { Component, OnInit } from '@angular/core';
import { ScoreRatingService } from '../score-rating.service';

@Component({
  selector: 'app-score-rating-viewer',
  templateUrl: './score-rating-viewer.component.html',
  styleUrls: ['./score-rating-viewer.component.scss']
})
export class ScoreRatingViewerComponent implements OnInit {
  scoreRating$ = this.scoreRatingService.ratingData$;

  constructor(private scoreRatingService: ScoreRatingService) { }

  ngOnInit(): void {
  }

}
