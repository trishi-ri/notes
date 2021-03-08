import { AbstractControl, ControlValueAccessor, FormGroup } from '@angular/forms';

export abstract class FormComponent<T = any> implements ControlValueAccessor {
  formGroup: FormGroup;

  protected onChange = (value: T) => {};
  protected onTouched = () => {};

  protected constructor(controls: {
    [key: string]: AbstractControl;
  }) {
    this.formGroup = new FormGroup(controls);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formGroup.disable() : this.formGroup.enable();
  }

  abstract writeValue(value: T): void;

}
