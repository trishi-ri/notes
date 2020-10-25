import { GlowingParameterModel } from '../glowing-parameter.model';

export class GlowingActiveModel extends GlowingParameterModel<boolean>{

  constructor(active?: boolean) {
    super(active, DEFAULT_ACTIVE);
  }

  protected defineNext(): boolean {
    return !this.value;
  }

}

const DEFAULT_ACTIVE = true;
