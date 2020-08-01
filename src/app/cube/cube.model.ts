import { CubeSide } from './cube-side/cube-side.model';

export class CubeModel {
  sides: CubeSide[] = [];

  constructor(sidesCount = 4, active = false) {
    Array.from(Array(sidesCount).keys()).forEach(() => this.sides.push(new CubeSide({glowing: {active}})));
  }
}
