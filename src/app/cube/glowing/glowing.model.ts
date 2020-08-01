export class GlowingModel {
  active: boolean;
  lightLevel: LightLevelEnum;
  lightColor: LightColorEnum;
  defaultActive = true;
  defaultLevel = LightLevelEnum.low;
  defaultColor = LightColorEnum.red;

  constructor(args?: IGlowingModel) {
    this.active = args && args.active !== undefined ? args.active : this.defaultActive;
    this.lightLevel = args && args.lightLevel !== undefined ? args.lightLevel : this.defaultLevel;
    this.lightColor = args && args.lightColor !== undefined ? args.lightColor : this.defaultColor;
  }
}

export interface IGlowingModel {
  active?: boolean;
  lightLevel?: LightLevelEnum;
  lightColor?: LightColorEnum;
}

export enum LightColorEnum {
  red,
  aquamarine
}

export enum LightLevelEnum {
  low,
  middle,
  high
}
