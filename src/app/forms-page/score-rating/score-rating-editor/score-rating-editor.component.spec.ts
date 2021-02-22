import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRatingEditorComponent } from './score-rating-editor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ScoreRatingEditorComponent', () => {
  let component: ScoreRatingEditorComponent;
  let fixture: ComponentFixture<ScoreRatingEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreRatingEditorComponent ],
      imports: [
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule
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
});
