import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CubeSide } from './cube-side.model';
import { GlowingConfig, LightLevelEnum } from './glowing.config';

@Component({
  selector: 'app-cube-side',
  templateUrl: './cube-side.component.html',
  styleUrls: ['./cube-side.component.scss']
})
export class CubeSideComponent implements OnInit {
  @Input() side: CubeSide;

  @HostBinding('class') get hostClasses(): string {
    // todo (refactoring): убрать свечение в директиву?
    const glowing: GlowingConfig = this.side.glowing;
    return [
      glowing && glowing.active ? 'glowing' : '',
      glowing && glowing.active ? `glowing--${glowing.lightColor}${glowing.lightLevel}` : ''
    ].join(' ');
  }

  lightLevels = LightLevelEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

}
