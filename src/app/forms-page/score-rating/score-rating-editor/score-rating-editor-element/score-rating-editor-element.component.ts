import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScoreModel } from '../../score-rating.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormComponent } from '../../../fields/form.abstract';

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
export class ScoreRatingEditorElementComponent extends FormComponent<ScoreModel> implements OnInit, ControlValueAccessor {

  @Output() deleteElementEvent = new EventEmitter<void>();

  formFieldsEnum = FormFieldsEnum;

  constructor() {
    super({
      [FormFieldsEnum.name]: new FormControl(),
      [FormFieldsEnum.value]: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((score: ScoreModel) => this.onChange(score));
  }

  writeValue(value: ScoreModel): void {
    this.formGroup.patchValue(value);
  }

}
