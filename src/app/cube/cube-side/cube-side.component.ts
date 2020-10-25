import { Component, Input, OnInit } from '@angular/core';
import { CubeSide } from './cube-side.model';
import { GlowingLevelEnum } from '../glowing/glowing-parameters/level/glowing-level.model';
import { GlowingColorEnum } from '../glowing/glowing-parameters/color/glowing-color.model';

@Component({
  selector: 'app-cube-side',
  templateUrl: './cube-side.component.html',
  styleUrls: ['./cube-side.component.scss']
})
export class CubeSideComponent implements OnInit {
  @Input() side: CubeSide;

  lightLevels = GlowingLevelEnum;
  lightColors = GlowingColorEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

}
