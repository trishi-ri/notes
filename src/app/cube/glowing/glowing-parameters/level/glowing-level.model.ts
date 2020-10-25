import { GlowingParameterModel } from '../glowing-parameter.model';

export class GlowingLevelModel extends GlowingParameterModel<GlowingLevelEnum> {

  constructor(level?: GlowingLevelEnum) {
    super(level, DEFAULT_LEVEL);
  }

  protected defineNext(): GlowingLevelEnum {
    switch (this.value) {
      case GlowingLevelEnum.low:
        return GlowingLevelEnum.middle;
      case GlowingLevelEnum.middle:
        return GlowingLevelEnum.high;
      case GlowingLevelEnum.high:
        return GlowingLevelEnum.low;
    }
  }

}

export enum GlowingLevelEnum {
  low,
  middle,
  high
}

const DEFAULT_LEVEL = GlowingLevelEnum.low;
