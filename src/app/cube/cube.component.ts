import { Component, OnInit } from '@angular/core';
import { CubeModel } from './cube.model';
import { CubeSide } from './cube-side/cube-side.model';
import { LightColorEnum, LightLevelEnum } from './cube-side/glowing.config';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {

  cube: CubeModel;
  lightColors = LightColorEnum;
  lightLevels = LightLevelEnum;

  constructor() { }

  ngOnInit(): void {
    this.cube = new CubeModel();
  }

  lightOn(): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.lightOn());
  }

  lightOff(): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.lightOff());
  }

  switchLight(): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.switchLight());
  }

  changeLightColor(newColor: LightColorEnum): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.changeColor(newColor));
  }

  changeLightLevel(newLevel: LightLevelEnum): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.changeLevel(newLevel));
  }
}
