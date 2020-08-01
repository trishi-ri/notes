import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeControlsComponent } from './cube-controls.component';
import { LightColorEnum, LightLevelEnum } from '../glowing/glowing.model';

describe('CubeControlsComponent', () => {
  let component: CubeControlsComponent;
  let fixture: ComponentFixture<CubeControlsComponent>;
  let hostElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeControlsComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(CubeControlsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      hostElement = fixture.nativeElement;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('output events', () => {
    it('lightOn', () => {
      spyOn(component.lightOnEvent, 'emit');
      expect(component.lightOnEvent.emit).not.toHaveBeenCalled();
      const lightOnBtn: HTMLButtonElement = hostElement.querySelector('[data-test="cube-controls_button_lightOn"]');
      lightOnBtn.click();
      expect(component.lightOnEvent.emit).toHaveBeenCalled();
    });

    it('lightOff', () => {
      spyOn(component.lightOffEvent, 'emit');
      expect(component.lightOffEvent.emit).not.toHaveBeenCalled();
      const lightOffBtn: HTMLButtonElement = hostElement.querySelector('[data-test="cube-controls_button_lightOff"]');
      lightOffBtn.click();
      expect(component.lightOffEvent.emit).toHaveBeenCalled();
    });

    it('switchLight', () => {
      spyOn(component.switchLightEvent, 'emit');
      expect(component.switchLightEvent.emit).not.toHaveBeenCalled();
      const switchLightBtn: HTMLButtonElement = hostElement.querySelector('[data-test="cube-controls_button_switchLight"]');
      switchLightBtn.click();
      expect(component.switchLightEvent.emit).toHaveBeenCalled();
    });

    it('changeLightColor', () => {
      spyOn(component.changeLightColorEvent, 'emit');
      expect(component.changeLightColorEvent.emit).not.toHaveBeenCalled();
      const changeLightColorBtn: HTMLButtonElement = hostElement.querySelector('[data-test="cube-controls_button_changeLightColor_red"]');
      changeLightColorBtn.click();
      expect(component.changeLightColorEvent.emit).toHaveBeenCalled();
      expect(component.changeLightColorEvent.emit).toHaveBeenCalledWith(LightColorEnum.red);
    });

    it('changeLightLevel', () => {
      spyOn(component.changeLightLevelEvent, 'emit');
      expect(component.changeLightLevelEvent.emit).not.toHaveBeenCalled();
      const changeLightLevelBtn: HTMLButtonElement = hostElement.querySelector('[data-test="cube-controls_button_changeLightLevel_low"]');
      changeLightLevelBtn.click();
      expect(component.changeLightLevelEvent.emit).toHaveBeenCalled();
      expect(component.changeLightLevelEvent.emit).toHaveBeenCalledWith(LightLevelEnum.low);
    });
  });
});
