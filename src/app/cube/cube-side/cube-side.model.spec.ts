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

  describe('changeLightLevel', () => {
    [
      {initLevel: LightLevelEnum.low, expectLevel: LightLevelEnum.middle},
      {initLevel: LightLevelEnum.middle, expectLevel: LightLevelEnum.high},
      {initLevel: LightLevelEnum.high, expectLevel: LightLevelEnum.low}
    ]
      .forEach(({initLevel, expectLevel}) => {
        it(`should change light level (${LightLevelEnum[initLevel]} => ${LightLevelEnum[expectLevel]})`, () => {
          const side = new CubeSide({glowing: {lightLevel: initLevel}});
          side.changeLightLevel();
          expect(side.glowing.lightLevel).toBe(expectLevel);
        });
      });
  });

  describe('changeLightColor', () => {
    [
      {initColor: LightColorEnum.red, expectColor: LightColorEnum.aquamarine},
      {initColor: LightColorEnum.aquamarine, expectColor: LightColorEnum.red},
    ]
      .forEach(({initColor, expectColor}) => {
        it(`should change light color (${LightColorEnum[initColor]} => ${LightColorEnum[expectColor]})`, () => {
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
