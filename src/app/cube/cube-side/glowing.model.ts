export class GlowingModel {
  active: boolean;
  lightLevel: LightLevelEnum;
  lightColor: LightColorEnum;

  constructor(args?: IGlowingModel) {
    this.active = args && args.active !== undefined ? args.active : false;
    this.lightLevel = args && args.lightLevel !== undefined ? args.lightLevel : LightLevelEnum.low;
    this.lightColor = args && args.lightColor !== undefined ? args.lightColor : LightColorEnum.red;
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
