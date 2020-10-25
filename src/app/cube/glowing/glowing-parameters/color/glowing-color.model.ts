import { GlowingParameterModel } from '../glowing-parameter.model';

export class GlowingColorModel extends GlowingParameterModel<GlowingColorEnum>{

  constructor(color?: GlowingColorEnum) {
    super(color, DEFAULT_COLOR);
  }

  protected defineNext(): GlowingColorEnum {
    switch (this.value) {
      case GlowingColorEnum.red:
        return GlowingColorEnum.aquamarine;
      case GlowingColorEnum.aquamarine:
        return GlowingColorEnum.red;
    }
  }

}

export enum GlowingColorEnum {
  red,
  aquamarine
}

const DEFAULT_COLOR = GlowingColorEnum.red;
