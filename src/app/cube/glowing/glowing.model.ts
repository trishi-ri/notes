import { GlowingLevelEnum, GlowingLevelModel } from './glowing-parameters/level/glowing-level.model';
import { GlowingColorEnum, GlowingColorModel } from './glowing-parameters/color/glowing-color.model';
import { GlowingActiveModel } from './glowing-parameters/active/glowing-active.model';

export class GlowingModel {
  private activeModel: GlowingActiveModel = new GlowingActiveModel();
  private lightLevelModel: GlowingLevelModel = new GlowingLevelModel();
  private lightColorModel: GlowingColorModel = new GlowingColorModel();

  constructor(args?: IGlowingModel) {
    if (args) {
      this.activeModel = new GlowingActiveModel(args.active);
      this.lightLevelModel = new GlowingLevelModel(args.lightLevel);
      this.lightColorModel = new GlowingColorModel(args.lightColor);
    }
  }

  public get active(): boolean {
    return this.activeModel.value;
  }

  public setNextActive(): void {
    this.activeModel.setNext();
  }

  public get lightLevel(): GlowingLevelEnum {
    return this.lightLevelModel.value;
  }

  public setNextLightLevel(): void {
    this.lightLevelModel.setNext();
  }

  public get lightColor(): GlowingColorEnum {
    return this.lightColorModel.value;
  }

  public setNextLightColor(): void {
    this.lightColorModel.setNext();
  }

}

export interface IGlowingModel {
  active?: boolean;
  lightLevel?: GlowingLevelEnum;
  lightColor?: GlowingColorEnum;
}
