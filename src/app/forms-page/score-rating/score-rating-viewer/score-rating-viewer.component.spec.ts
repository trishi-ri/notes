import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRatingViewerComponent } from './score-rating-viewer.component';
import { MatCardModule } from '@angular/material/card';
import { ScoreRatingService } from '../score-rating.service';

describe('ScoreRatingViewerComponent', () => {
  let component: ScoreRatingViewerComponent;
  let fixture: ComponentFixture<ScoreRatingViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreRatingViewerComponent ],
      imports: [MatCardModule],
      providers: [ScoreRatingService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreRatingViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
