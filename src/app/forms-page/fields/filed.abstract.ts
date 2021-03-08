import { ControlValueAccessor, FormControl } from '@angular/forms';

export abstract class FieldComponent<T = any> implements ControlValueAccessor {
  formControl = new FormControl();

  protected onChange = (value: T) => {};
  protected onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(value: T): void {
    this.formControl.setValue(value);
  }

}
