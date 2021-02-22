import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
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
export class ScoreRatingEditorComponent implements OnInit {

  mainForm: FormGroup = new FormGroup(this.formControls);
  formFieldsEnum = FormFieldsEnum;

  constructor() {
  }

  ngOnInit(): void {
    const scoreRating: ScoreRatingModel = {
      name: 'score',
      rating: [
        {name: 'first name', value: 1.23},
      ]
    };
    this.mainForm.patchValue(scoreRating);
  }

  private get formControls(): {
    [key: string]: AbstractControl;
  } {
    return {
      [FormFieldsEnum.name]: new FormControl(),
      [FormFieldsEnum.rating]: new FormControl(),
    };
  }

}
