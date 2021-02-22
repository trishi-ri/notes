import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScoreModel } from '../../score-rating.model';

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
export class ScoreRatingEditorListComponent implements OnInit, ControlValueAccessor {

  mainForm = new FormGroup({
    elements: new FormArray([])
  });
  elements = this.mainForm.get('elements') as FormArray;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor() {
  }

  ngOnInit(): void {
  }

  addElement(): void {
    this.elements.push(new FormControl());
  }

  deleteElement(index: number): void {
    this.elements.removeAt(index);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.mainForm.disable() : this.mainForm.enable();
  }

  writeValue(scores: ScoreModel[]): void {
    this.elements.clear();
    scores.forEach(() => this.addElement());
    this.elements.patchValue(scores);
  }

}
