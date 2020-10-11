import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CubeModel } from './cube.model';
import { CubeSide } from './cube-side/cube-side.model';
import { LightColorEnum, LightLevelEnum } from './glowing/glowing.model';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeComponent implements OnInit {

  cube: CubeModel;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cube = new CubeModel();
  }

  lightOn(): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.active = true);
    this.cdr.markForCheck();
  }

  lightOff(): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.active = false);
  }

  switchLight(currentSide?: CubeSide): void {
    if (currentSide) {
      currentSide.switchLight();
    } else {
      this.cube.sides.forEach((side: CubeSide) => side.switchLight());
    }
  }

  changeLightColor(newColor: LightColorEnum): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.lightColor = newColor);
  }

  changeLightLevel(newLevel: LightLevelEnum): void {
    this.cube.sides.forEach((side: CubeSide) => side.glowing.lightLevel = newLevel);
  }
}
