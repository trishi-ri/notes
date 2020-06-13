import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LightColorEnum, LightLevelEnum } from '../cube-side/glowing.model';

@Component({
  selector: 'app-cube-controls',
  templateUrl: './cube-controls.component.html',
  styleUrls: ['./cube-controls.component.scss']
})
export class CubeControlsComponent implements OnInit {

  // todo (refactoring): убрать это потом в пайп, преобразующий энам в массив
  lightColors: EnumArrayItem[] = this.createLightColorEnumArray();
  lightLevels: EnumArrayItem[] = this.createLightLevelEnumArray();

  @Output() lightOnEvent = new EventEmitter<void>();
  @Output() lightOffEvent = new EventEmitter<void>();
  @Output() switchLightEvent = new EventEmitter<void>();
  @Output() changeLightColorEvent = new EventEmitter<LightColorEnum>();
  @Output() changeLightLevelEvent = new EventEmitter<LightLevelEnum>();

  constructor() {
  }

  ngOnInit(): void {
  }

  lightOn(): void {
    this.lightOnEvent.emit();
  }

  lightOff(): void {
    this.lightOffEvent.emit();
  }

  switchLight(): void {
    this.switchLightEvent.emit();
  }

  changeLightColor(newColor: LightColorEnum): void {
    this.changeLightColorEvent.emit(newColor);
  }

  changeLightLevel(newLevel: LightLevelEnum): void {
    this.changeLightLevelEvent.emit(newLevel);
  }

  private createLightColorEnumArray(): EnumArrayItem[] {
    return Object.keys(LightColorEnum)
      .filter(key => typeof LightColorEnum[key] === 'string')
      .map(key => new EnumArrayItem(Number(key), LightColorEnum[key]));
  }

  private createLightLevelEnumArray(): EnumArrayItem[] {
    return Object.keys(LightLevelEnum)
      .filter(key => typeof LightLevelEnum[key] === 'string')
      .map(key => new EnumArrayItem(Number(key), LightLevelEnum[key]));
  }

}

class EnumArrayItem {
  constructor(public id: number, public name: string) {
  }
}
