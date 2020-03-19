import { Component, OnInit } from '@angular/core';
import { CubeModel, LightColorEnum, LightLevelEnum } from './glowing-cube.model';

@Component({
  selector: 'app-glowing-cube',
  templateUrl: './glowing-cube.component.html',
  styleUrls: ['./glowing-cube.component.scss']
})
export class GlowingCubeComponent implements OnInit {

  cube: CubeModel;
  lightColors = LightColorEnum;
  lightLevels = LightLevelEnum;

  constructor() { }

  ngOnInit(): void {
  }

  createCube(): void {
    this.cube = new CubeModel();
  }

  destroyCube(): void {
    this.cube = undefined;
  }
}
