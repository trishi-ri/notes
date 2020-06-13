import { GlowingModel, IGlowingModel } from './glowing.model';

export class CubeSide {
  glowing: GlowingModel;

  constructor(args?: { glowing?: IGlowingModel }) {
    this.glowing = new GlowingModel(args && args.glowing ? args.glowing : null);
  }
}
