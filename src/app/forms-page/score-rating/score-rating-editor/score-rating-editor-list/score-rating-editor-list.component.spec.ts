import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRatingEditorListComponent } from './score-rating-editor-list.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ScoreRatingEditorElementComponent } from '../score-rating-editor-element/score-rating-editor-element.component';

describe('ScoreRatingEditorListComponent', () => {
  let component: ScoreRatingEditorListComponent;
  let fixture: ComponentFixture<ScoreRatingEditorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreRatingEditorListComponent, ScoreRatingEditorElementComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreRatingEditorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setDisabledState', () => {
    it('should disable form', () => {
      component.setDisabledState(true);
      expect(component.formGroup.disabled).toBe(true);
    });

    it('should enable form', () => {
      component.setDisabledState(false);
      expect(component.formGroup.enabled).toBe(true);
    });
  });

  describe('deleteElement', () => {
    it('should delete element', () => {
      component.addElement();
      expect(component.elements.length).toBe(1);
      component.deleteElement(0);
      expect(component.elements.length).toBe(0);
    });
  });

});
