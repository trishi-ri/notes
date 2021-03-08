import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FieldComponent } from '../filed.abstract';
import { MatFormFieldAppearance } from '@angular/material/form-field/form-field';

@UntilDestroy()
@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextFieldComponent),
    multi: true
  }]
})
export class TextFieldComponent extends FieldComponent<string> implements OnInit {
  @Input() appearance: MatFormFieldAppearance = 'fill';
  @Input() label: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value => this.onChange(value)));
  }

}
