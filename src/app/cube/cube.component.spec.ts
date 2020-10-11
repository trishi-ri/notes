import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CubeComponent } from './cube.component';
import { LightColorEnum, LightLevelEnum } from './glowing/glowing.model';
import { CubeSideComponent } from './cube-side/cube-side.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CubeComponent', () => {
  let component: CubeComponent;
  let fixture: ComponentFixture<CubeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeComponent, CubeSideComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(CubeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('glowing', () => {
    it('should light on all sides', () => {
      component.lightOn();
      expect(component.cube.sides.every(side => side.glowing.active)).toBeTrue();
    });

    it('should light off all sides', () => {
      component.lightOff();
      expect(component.cube.sides.every(side => !side.glowing.active)).toBeTrue();
    });

    it('should switch light all sides', () => {
      const startingStates = component.cube.sides.map(side => side.glowing.active);
      component.switchLight();
      expect(component.cube.sides.every((side, i) => side.glowing.active === !startingStates[i])).toBeTrue();
    });

    it('should change light color all sides', () => {
      component.changeLightColor(LightColorEnum.red);
      expect(component.cube.sides.every(side => side.glowing.lightColor === LightColorEnum.red)).toBeTrue();
      component.changeLightColor(LightColorEnum.aquamarine);
      expect(component.cube.sides.every(side => side.glowing.lightColor === LightColorEnum.aquamarine)).toBeTrue();
    });

    it('should change light level all sides', () => {
      component.changeLightLevel(LightLevelEnum.low);
      expect(component.cube.sides.every(side => side.glowing.lightLevel === LightLevelEnum.low)).toBeTrue();
      component.changeLightLevel(LightLevelEnum.middle);
      expect(component.cube.sides.every(side => side.glowing.lightLevel === LightLevelEnum.middle)).toBeTrue();
      component.changeLightLevel(LightLevelEnum.high);
      expect(component.cube.sides.every(side => side.glowing.lightLevel === LightLevelEnum.high)).toBeTrue();
    });
  });

});
