import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScoreModel } from '../../score-rating.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormComponent } from '../../../fields/form.abstract';

@UntilDestroy()
@Component({
  selector: 'app-score-rating-editor-list',
  templateUrl: './score-rating-editor-list.component.html',
  styleUrls: ['./score-rating-editor-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoreRatingEditorListComponent),
      multi: true
    }
  ]
})
export class ScoreRatingEditorListComponent extends FormComponent<ScoreModel[]> implements OnInit, ControlValueAccessor {

  elements = this.formGroup.get('elements') as FormArray;

  constructor() {
    super({
      elements: new FormArray([])
    });
  }

  ngOnInit(): void {
    this.elements.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((elements: ScoreModel[]) => this.onChange(elements));
  }

  addElement(): void {
    this.elements.push(new FormControl());
  }

  deleteElement(index: number): void {
    this.elements.removeAt(index);
  }

  writeValue(scores: ScoreModel[]): void {
    this.elements.clear();
    if (scores) {
      scores.forEach(() => this.addElement());
      this.elements.patchValue(scores);
    }
  }

}
