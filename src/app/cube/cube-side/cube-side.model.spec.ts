import { CubeSide } from './cube-side.model';
import { GlowingModel, IGlowingModel } from '../glowing/glowing.model';
import { GlowingLevelEnum } from '../glowing/glowing-parameters/level/glowing-level.model';
import { GlowingColorEnum } from '../glowing/glowing-parameters/color/glowing-color.model';

describe('CubeSide', () => {
  it('should create with default params', () => {
    const defaultGlowing = new GlowingModel({
      active: true,
      lightColor: GlowingColorEnum.red,
      lightLevel: GlowingLevelEnum.low
    } as IGlowingModel);
    const side = new CubeSide();
    expect(side.glowing).toEqual(defaultGlowing);
  });

  it('should create with selected params', () => {
    const selectedGlowing = new GlowingModel({
      active: false,
      lightColor: GlowingColorEnum.aquamarine,
      lightLevel: GlowingLevelEnum.high
    } as IGlowingModel);
    const side = new CubeSide({glowing: selectedGlowing});
    expect(side.glowing).toEqual(selectedGlowing);
  });

  describe('changeLightLevel', () => {
    [
      {initLevel: GlowingLevelEnum.low, expectLevel: GlowingLevelEnum.middle},
      {initLevel: GlowingLevelEnum.middle, expectLevel: GlowingLevelEnum.high},
      {initLevel: GlowingLevelEnum.high, expectLevel: GlowingLevelEnum.low}
    ]
      .forEach(({initLevel, expectLevel}) => {
        it(`should change light level (${GlowingLevelEnum[initLevel]} => ${GlowingLevelEnum[expectLevel]})`, () => {
          const side = new CubeSide({glowing: {lightLevel: initLevel}});
          side.changeLightLevel();
          expect(side.glowing.lightLevel).toBe(expectLevel);
        });
      });
  });

  describe('changeLightColor', () => {
    [
      {initColor: GlowingColorEnum.red, expectColor: GlowingColorEnum.aquamarine},
      {initColor: GlowingColorEnum.aquamarine, expectColor: GlowingColorEnum.red},
    ]
      .forEach(({initColor, expectColor}) => {
        it(`should change light color (${GlowingColorEnum[initColor]} => ${GlowingColorEnum[expectColor]})`, () => {
          const side = new CubeSide({glowing: {lightColor: initColor}});
          side.changeLightColor();
          expect(side.glowing.lightColor).toBe(expectColor);
        });
      });
  });

  describe('switchLight', () => {
    [
      {initLight: true, expectLight: false},
      {initLight: false, expectLight: true},
    ]
      .forEach(({initLight, expectLight}) => {
        it(`should change light activation (${initLight} => ${expectLight})`, () => {
          const side = new CubeSide({glowing: {active: initLight}});
          side.switchLight();
          expect(side.glowing.active).toBe(expectLight);
        });
      });
  });

});
