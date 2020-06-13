import { Component, OnInit } from '@angular/core';
import { CubeModel, LightColorEnum, LightLevelEnum } from './cube.model';

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
  }

  createCube(): void {
    this.cube = new CubeModel();
  }

  destroyCube(): void {
    this.cube = undefined;
  }
}
