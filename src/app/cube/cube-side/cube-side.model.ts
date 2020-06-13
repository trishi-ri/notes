import { GlowingConfig } from './glowing.config';

export class CubeSide {
  glowing: GlowingConfig;

  constructor(args?: { glowing?: GlowingConfig }) {
    this.glowing = args && args.glowing ? args.glowing : new GlowingConfig();
  }
}
