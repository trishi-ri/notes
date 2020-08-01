import { GlowingModel, IGlowingModel, LightColorEnum, LightLevelEnum } from './glowing.model';

describe('GlowingModel', () => {
  it('should create with default params', () => {
    const defaultGlowing = {
      active: true,
      lightColor: LightColorEnum.red,
      lightLevel: LightLevelEnum.low
    } as IGlowingModel;
    const glowing = new GlowingModel();
    expect(glowing.active).toBe(defaultGlowing.active);
    expect(glowing.lightLevel).toBe(defaultGlowing.lightLevel);
    expect(glowing.lightColor).toBe(defaultGlowing.lightColor);
  });

  it('should create with selected params', () => {
    const selectedGlowing = {
      active: false,
      lightColor: LightColorEnum.aquamarine,
      lightLevel: LightLevelEnum.high
    } as IGlowingModel;
    const glowing = new GlowingModel(selectedGlowing);
    expect(glowing.active).toBe(selectedGlowing.active);
    expect(glowing.lightLevel).toBe(selectedGlowing.lightLevel);
    expect(glowing.lightColor).toBe(selectedGlowing.lightColor);
  });
});
