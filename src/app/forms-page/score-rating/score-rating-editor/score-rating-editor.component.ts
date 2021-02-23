import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ScoreRatingService } from '../score-rating.service';

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

  constructor(private scoreRatingService: ScoreRatingService) {
  }

  ngOnInit(): void {
    const scoreRating = this.scoreRatingService.defaultData;
    this.mainForm.patchValue(scoreRating);
  }

  apply(): void {
    const formData = this.mainForm.getRawValue();
    this.scoreRatingService.updateRatingData$(formData);
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
