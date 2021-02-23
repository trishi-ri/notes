import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScoreModel } from '../../score-rating.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

enum FormFieldsEnum {
  name = 'name',
  value = 'value'
}

@UntilDestroy()
@Component({
  selector: 'app-sort-rating-editor-element',
  templateUrl: './score-rating-editor-element.component.html',
  styleUrls: ['./score-rating-editor-element.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoreRatingEditorElementComponent),
      multi: true
    }
  ]
})
export class ScoreRatingEditorElementComponent implements OnInit, ControlValueAccessor {

  @Output() deleteElementEvent = new EventEmitter<void>();

  mainForm: FormGroup = new FormGroup(this.formControls);
  formFieldsEnum = FormFieldsEnum;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
    this.mainForm.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((score: ScoreModel) => this.onChange(score));
  }

  private get formControls(): {
    [key: string]: AbstractControl;
  } {
    return {
      [FormFieldsEnum.name]: new FormControl(),
      [FormFieldsEnum.value]: new FormControl(),
    };
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

  writeValue(score: ScoreModel): void {
    this.mainForm.patchValue(score);
  }


}
