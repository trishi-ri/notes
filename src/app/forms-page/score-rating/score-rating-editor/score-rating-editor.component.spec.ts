import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreRatingEditorComponent } from './score-rating-editor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoreRatingEditorListComponent } from './score-rating-editor-list/score-rating-editor-list.component';
import { MatIconModule } from '@angular/material/icon';
import { ScoreRatingEditorElementComponent } from './score-rating-editor-element/score-rating-editor-element.component';
import { MatCardModule } from '@angular/material/card';
import { ScoreRatingService } from '../score-rating.service';
import { ScoreRatingModel } from '../score-rating.model';

const scoreRatingServiceStub: Partial<ScoreRatingService> = {
  updateRatingData$: () => {},
  defaultData: {name: '', rating: []} as ScoreRatingModel
};

describe('ScoreRatingEditorComponent', () => {
  let component: ScoreRatingEditorComponent;
  let fixture: ComponentFixture<ScoreRatingEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreRatingEditorComponent, ScoreRatingEditorListComponent, ScoreRatingEditorElementComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCardModule
      ],
      providers: [
        {provide: ScoreRatingService, useValue: scoreRatingServiceStub}
      ]
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

  it('#apply should call update method', () => {
    spyOn(scoreRatingServiceStub, 'updateRatingData$');
    component.apply();
    expect(scoreRatingServiceStub.updateRatingData$).toHaveBeenCalled();
  });
});
