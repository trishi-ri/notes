import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldComponent } from '../filed.abstract';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatFormFieldAppearance } from '@angular/material/form-field/form-field';

@UntilDestroy()
@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberFieldComponent),
    multi: true
  }]
})
export class NumberFieldComponent extends FieldComponent<number> implements OnInit {
  @Input() appearance: MatFormFieldAppearance = 'fill';
  @Input() label: string;
  @Input() step = 1;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value => this.onChange(value)));
  }

}
