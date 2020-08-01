import { Component, Input, OnInit } from '@angular/core';
import { CubeSide } from './cube-side.model';
import { LightColorEnum, LightLevelEnum } from '../glowing/glowing.model';

@Component({
  selector: 'app-cube-side',
  templateUrl: './cube-side.component.html',
  styleUrls: ['./cube-side.component.scss']
})
export class CubeSideComponent implements OnInit {
  @Input() side: CubeSide;

  lightLevels = LightLevelEnum;
  lightColors = LightColorEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

}
