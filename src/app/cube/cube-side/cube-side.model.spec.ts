import { CubeSide } from './cube-side.model';
import { GlowingModel, IGlowingModel, LightColorEnum, LightLevelEnum } from '../glowing/glowing.model';

describe('CubeSide', () => {
  it('should create with default params', () => {
    const defaultGlowing = new GlowingModel({
      active: true,
      lightColor: LightColorEnum.red,
      lightLevel: LightLevelEnum.low
    } as IGlowingModel);
    const side = new CubeSide();
    expect(side.glowing).toEqual(defaultGlowing);
  });

  it('should create with selected params', () => {
    const selectedGlowing = new GlowingModel({
      active: false,
      lightColor: LightColorEnum.aquamarine,
      lightLevel: LightLevelEnum.high
    } as IGlowingModel);
    const side = new CubeSide({glowing: selectedGlowing});
    expect(side.glowing).toEqual(selectedGlowing);
  });
});
