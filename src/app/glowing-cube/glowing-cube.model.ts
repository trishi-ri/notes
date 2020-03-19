export class CubeModel {
  sides: CubeSide[] = [];

  constructor(sidesCount = 4) {
    Array.from(Array(sidesCount).keys()).forEach(() => this.sides.push(new CubeSide()));
  }

  lightOn(): void {
    this.sides.forEach((side: CubeSide) => side.lightOn());
  }

  lightOff(): void {
    this.sides.forEach((side: CubeSide) => side.lightOff());
  }

  switchLight(): void {
    this.sides.forEach((side: CubeSide) => side.switchLight());
  }

  changeLightColor(newColor: LightColorEnum): void {
    this.sides.forEach((side: CubeSide) => side.changeColor(newColor));
  }

  changeLightLevel(newLevel: LightLevelEnum): void {
    this.sides.forEach((side: CubeSide) => side.changeLevel(newLevel));
  }
}

class CubeSide {
  glowing: GlowingConfig = new GlowingConfig();

  lightOn(): void {
    this.glowing.active = true;
  }

  lightOff(): void {
    this.glowing.active = false;
  }

  switchLight(): void {
    this.glowing.active = !this.glowing.active;
  }

  changeColor(newColor: LightColorEnum): void {
    this.glowing.lightColor = newColor;
  }

  changeLevel(newLevel: LightLevelEnum): void {
    this.glowing.lightLevel = newLevel;
  }
}


class GlowingConfig {
  active = false;
  lightLevel: LightLevelEnum = LightLevelEnum.low;
  lightColor: LightColorEnum = LightColorEnum.red;
}

export enum LightLevelEnum {
  low,
  middle,
  high
}

export enum LightColorEnum {
  red = 'red',
  aquamarine = 'aquamarine'
}
