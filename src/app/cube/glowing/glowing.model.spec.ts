import { GlowingModel, IGlowingModel, LightColorEnum, LightLevelEnum } from './glowing.model';

describe('GlowingModel', () => {
  it('should create with default params', () => {
    const defaultGlowing = {
      active: true,
      lightColor: LightColorEnum.red,
      lightLevel: LightLevelEnum.low
    } as IGlowingModel;
    const glowing = new GlowingModel();
    expect(glowing.active).toEqual(defaultGlowing.active);
    expect(glowing.lightLevel).toEqual(defaultGlowing.lightLevel);
    expect(glowing.lightColor).toEqual(defaultGlowing.lightColor);
  });

  it('should create with selected params', () => {
    const selectedGlowing = {
      active: false,
      lightColor: LightColorEnum.aquamarine,
      lightLevel: LightLevelEnum.high
    } as IGlowingModel;
    const glowing = new GlowingModel(selectedGlowing);
    expect(glowing.active).toEqual(selectedGlowing.active);
    expect(glowing.lightLevel).toEqual(selectedGlowing.lightLevel);
    expect(glowing.lightColor).toEqual(selectedGlowing.lightColor);
  });
});
