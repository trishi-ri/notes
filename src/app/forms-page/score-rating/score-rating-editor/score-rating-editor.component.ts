import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ScoreRatingService } from '../score-rating.service';
import { FormComponent } from '../../fields/form.abstract';
import { ScoreRatingModel } from '../score-rating.model';

enum FormFieldsEnum {
  name = 'name',
  rating = 'rating'
}

@Component({
  selector: 'app-score-rating-editor',
  templateUrl: './score-rating-editor.component.html',
  styleUrls: ['./score-rating-editor.component.scss']
})
export class ScoreRatingEditorComponent extends FormComponent<ScoreRatingModel> implements OnInit {

  formFieldsEnum = FormFieldsEnum;

  constructor(private scoreRatingService: ScoreRatingService) {
    super({
      [FormFieldsEnum.name]: new FormControl(),
      [FormFieldsEnum.rating]: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.writeValue(this.scoreRatingService.ratingData);
  }

  apply(): void {
    const formData = this.formGroup.getRawValue();
    this.scoreRatingService.updateRatingData$(formData);
  }

  writeValue(value: ScoreRatingModel): void {
    this.formGroup.patchValue(value);
  }

}
