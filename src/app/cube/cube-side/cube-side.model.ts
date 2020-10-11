import { GlowingModel, IGlowingModel, LightColorEnum, LightLevelEnum } from '../glowing/glowing.model';

export class CubeSide {
  glowing: GlowingModel;

  constructor(args?: { glowing?: IGlowingModel }) {
    this.glowing = new GlowingModel(args && args.glowing ? args.glowing : null);
  }

  switchLight(): void {
    this.glowing.active = !this.glowing.active;
  }

  changeLightColor(): void {
    this.glowing.lightColor = this.nextLightColor;
  }

  changeLightLevel(): void {
    this.glowing.lightLevel = this.nextLightLevel;
  }

  private get nextLightColor(): LightColorEnum {
    switch (this.glowing.lightColor) {
      case LightColorEnum.red:
        return LightColorEnum.aquamarine;
      case LightColorEnum.aquamarine:
      default:
        return LightColorEnum.red;
    }
  }

  private get nextLightLevel(): LightLevelEnum {
    switch (this.glowing.lightLevel) {
      case LightLevelEnum.low:
        return LightLevelEnum.middle;
      case LightLevelEnum.middle:
        return LightLevelEnum.high;
      case LightLevelEnum.high:
      default:
        return LightLevelEnum.low;
    }
  }
}
