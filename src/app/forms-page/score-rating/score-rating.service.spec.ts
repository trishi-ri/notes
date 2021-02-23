import { ScoreRatingService } from './score-rating.service';
import { ScoreRatingModel } from './score-rating.model';

describe('ScoreRatingService', () => {
  let service: ScoreRatingService;
  beforeEach(() => { service = new ScoreRatingService(); });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('#ratingData should return default value', () => {
    expect(service.ratingData).toEqual(service.defaultData);
  });

  it('#ratingData$ should return default value from observable', (done: DoneFn) => {
    service.ratingData$.subscribe(value => {
      expect(value).toEqual(service.defaultData);
      done();
    });
  });

  it('#updateRatingData$ should update value', () => {
    const newValue: ScoreRatingModel = {name: 'new name', rating: []};
    service.updateRatingData$(newValue);
    expect(service.ratingData).toEqual(newValue);
  });
});
