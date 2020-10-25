import { GlowingModel, IGlowingModel } from './glowing.model';
import { GlowingLevelEnum } from './glowing-parameters/level/glowing-level.model';
import { GlowingColorEnum } from './glowing-parameters/color/glowing-color.model';

describe('GlowingModel', () => {
  it('should create with default params', () => {
    const defaultGlowing = {
      active: true,
      lightColor: GlowingColorEnum.red,
      lightLevel: GlowingLevelEnum.low
    } as IGlowingModel;
    const glowing = new GlowingModel();
    expect(glowing.active).toBe(defaultGlowing.active);
    expect(glowing.lightLevel).toBe(defaultGlowing.lightLevel);
    expect(glowing.lightColor).toBe(defaultGlowing.lightColor);
  });

  it('should create with selected params', () => {
    const selectedGlowing = {
      active: false,
      lightColor: GlowingColorEnum.aquamarine,
      lightLevel: GlowingLevelEnum.high
    } as IGlowingModel;
    const glowing = new GlowingModel(selectedGlowing);
    expect(glowing.active).toBe(selectedGlowing.active);
    expect(glowing.lightLevel).toBe(selectedGlowing.lightLevel);
    expect(glowing.lightColor).toBe(selectedGlowing.lightColor);
  });
});
