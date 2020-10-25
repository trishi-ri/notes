import { GlowingModel, IGlowingModel } from '../glowing/glowing.model';

export class CubeSide {
  glowing: GlowingModel;

  constructor(args?: { glowing?: IGlowingModel }) {
    this.glowing = new GlowingModel(args && args.glowing ? args.glowing : null);
  }

  switchLight(): void {
    this.glowing.setNextActive();
  }

  changeLightColor(): void {
    this.glowing.setNextLightColor();
  }

  changeLightLevel(): void {
    this.glowing.setNextLightLevel();
  }

}
