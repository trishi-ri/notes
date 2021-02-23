import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScoreRatingModel } from './score-rating.model';

@Injectable()
export class ScoreRatingService {
  private _ratingData$ = new BehaviorSubject<ScoreRatingModel>(this.defaultData);

  get ratingData$(): Observable<ScoreRatingModel> {
    return this._ratingData$.asObservable();
  }

  get ratingData(): ScoreRatingModel {
    return this._ratingData$.getValue();
  }

  updateRatingData$(value: ScoreRatingModel): void {
    this._ratingData$.next(value);
  }

  get defaultData(): ScoreRatingModel {
    return {
      name: 'score',
      rating: [
        {name: 'first name', value: 1.23},
      ]
    };
  }
}
