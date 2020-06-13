export class GlowingConfig {
  active = false;
  lightLevel: LightLevelEnum = LightLevelEnum.low;
  lightColor: LightColorEnum = LightColorEnum.red;

  lightOn(): void {
    this.active = true;
  }

  lightOff(): void {
    this.active = false;
  }

  switchLight(): void {
    this.active = !this.active;
  }

  changeColor(newColor: LightColorEnum): void {
    this.lightColor = newColor;
  }

  changeLevel(newLevel: LightLevelEnum): void {
    this.lightLevel = newLevel;
  }
}

export enum LightColorEnum {
  red = 'red',
  aquamarine = 'aquamarine'
}

export enum LightLevelEnum {
  low = 1,
  middle = 2,
  high = 3
}
