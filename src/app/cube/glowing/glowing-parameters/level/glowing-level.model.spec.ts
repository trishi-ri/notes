import { GlowingLevelEnum, GlowingLevelModel } from './glowing-level.model';

describe('GlowingLevelModel', () => {
  it('should create with default params', () => {
    const levelModel = new GlowingLevelModel();
    expect(levelModel.value).toEqual(GlowingLevelEnum.low);
  });

  it('should create with default params (from undefined param)', () => {
    const levelModel = new GlowingLevelModel(undefined);
    expect(levelModel.value).toEqual(GlowingLevelEnum.low);
  });

});
