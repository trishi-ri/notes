export abstract class GlowingParameterModel<T> {
  value: T;

  protected constructor(initValue: T, defaultValue: T) {
    this.value = this.isUndefined(initValue) ? defaultValue : initValue;
  }

  setNext(): void {
    this.value = this.defineNext();
  }

  protected abstract defineNext(): T;

  private isUndefined(value: T): boolean {
    return value === undefined;
  }
}
