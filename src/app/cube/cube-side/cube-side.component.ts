import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CubeSide } from './cube-side.model';
import { GlowingModel, LightColorEnum, LightLevelEnum } from './glowing.model';

@Component({
  selector: 'app-cube-side',
  templateUrl: './cube-side.component.html',
  styleUrls: ['./cube-side.component.scss']
})
export class CubeSideComponent implements OnInit {
  @Input() side: CubeSide;

  @HostBinding('class') get hostClasses(): string {
    // todo (refactoring): убрать свечение в директиву?
    const glowing: GlowingModel = this.side && this.side.glowing;
    return [
      glowing && glowing.active ? 'glowing' : '',
      glowing && glowing.active ? `glowing--${LightColorEnum[glowing.lightColor]}-${LightLevelEnum[glowing.lightLevel]}` : ''
    ].filter(className => className).join(' ');
  }

  lightLevels = LightLevelEnum;
  lightColors = LightColorEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

}
