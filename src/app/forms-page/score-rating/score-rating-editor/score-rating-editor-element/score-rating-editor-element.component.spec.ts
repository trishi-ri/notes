import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreRatingEditorElementComponent } from './score-rating-editor-element.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from '../../../fields/text-field/text-field.component';
import { NumberFieldComponent } from '../../../fields/number-field/number-field.component';

describe('ScoreRatingEditorElementComponent', () => {
  let component: ScoreRatingEditorElementComponent;
  let fixture: ComponentFixture<ScoreRatingEditorElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreRatingEditorElementComponent, TextFieldComponent, NumberFieldComponent ],
      imports: [
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreRatingEditorElementComponent);
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
});
