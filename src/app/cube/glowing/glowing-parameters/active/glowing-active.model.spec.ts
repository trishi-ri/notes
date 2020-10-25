import { GlowingActiveModel } from './glowing-active.model';

describe('GlowingActiveModel', () => {
  it('should create with default params', () => {
    const colorModel = new GlowingActiveModel();
    expect(colorModel.value).toEqual(true);
  });

  it('should create with default params (from undefined param)', () => {
    const colorModel = new GlowingActiveModel(undefined);
    expect(colorModel.value).toEqual(true);
  });
});
