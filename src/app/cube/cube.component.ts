import { Component, OnInit } from '@angular/core';
import { CubeModel } from './cube.model';
import { CubeSide } from './cube-side/cube-side.model';
import { LightColorEnum, LightLevelEnum } from './cube-side/glowing.model';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {

  cube: CubeModel;

  constructor() { }

  ngOnInit(): void {
    this.cube = new CubeModel();
  }

  lightOn(): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.active = true);
  }

  lightOff(): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.active = false);
  }

  switchLight(): void {
    this.cube.sides.forEach((side: CubeSide) => this.switchLightSide(side));
  }

  changeLightColor(newColor: LightColorEnum): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.lightColor = newColor);
  }

  changeLightLevel(newLevel: LightLevelEnum): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.lightLevel = newLevel);
  }

  switchLightSide(side: CubeSide): void {
    side.glowing.active = !side.glowing.active;
  }
}
