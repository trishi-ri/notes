import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRatingEditorComponent } from './score-rating-editor.component';

describe('ScoreRatingEditorComponent', () => {
  let component: ScoreRatingEditorComponent;
  let fixture: ComponentFixture<ScoreRatingEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreRatingEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreRatingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
