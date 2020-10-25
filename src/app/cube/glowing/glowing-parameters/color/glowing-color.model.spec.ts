import { GlowingColorEnum, GlowingColorModel } from './glowing-color.model';

describe('GlowingActiveModel', () => {
  it('should create with default params', () => {
    const colorModel = new GlowingColorModel();
    expect(colorModel.value).toEqual(GlowingColorEnum.red);
  });

  it('should create with default params (from undefined param)', () => {
    const colorModel = new GlowingColorModel(undefined);
    expect(colorModel.value).toEqual(GlowingColorEnum.red);
  });
});
