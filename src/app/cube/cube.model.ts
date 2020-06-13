import { CubeSide } from './cube-side/cube-side.model';

export class CubeModel {
  sides: CubeSide[] = [];

  constructor(sidesCount = 4) {
    Array.from(Array(sidesCount).keys()).forEach(() => this.sides.push(new CubeSide()));
  }
}
