import { GlowingDirective } from './glowing.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { newEvent } from '../../../testing';
import { GlowingColorEnum } from './glowing-parameters/color/glowing-color.model';

@Component({
  template: `
  <div appGlowing>Default (active, low, red)</div>
  <div appGlowing="false">Glowing No Active</div>
  <div>No Glowing</div>
  <div [appGlowing]="false">Glowing No Active (from boolean)</div>
  <input appGlowing #box [glowingColor]="box.value" value="1">`
})
class TestComponent {}

describe('GlowingDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];
  let bareDiv: DebugElement;

  const testGlowing = {
    boxShadow: {
      default: 'red 0px 0px 5px',
      inactive: '',
      selected: 'aquamarine 0px 0px 5px'
    }
  };

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ GlowingDirective, TestComponent ]
    })
      .createComponent(TestComponent);
    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.directive(GlowingDirective));
    bareDiv = fixture.debugElement.query(By.css('div:not([appGlowing])'));
  });

  // color tests
  it('should have four elements with directive', () => {
    expect(des.length).toBe(4);
  });

  it('should color 1st <div> boxShadow with default glowing (active, low, red)', () => {
    const dir = des[0].injector.get(GlowingDirective) as GlowingDirective;
    const boxShadow = des[0].nativeElement.style.boxShadow;
    expect(boxShadow).toBe(testGlowing.boxShadow.default);
    expect(boxShadow).toBe(dir.glowingStyle.boxShadow);
  });

  it('should color 2nd <div> boxShadow with inactive glowing', () => {
    const dir = des[1].injector.get(GlowingDirective) as GlowingDirective;
    const boxShadow = des[1].nativeElement.style.boxShadow;
    expect(boxShadow).toBe(testGlowing.boxShadow.inactive);
    expect(boxShadow).toBe(dir.glowingStyle.boxShadow);
  });

  it('should bind <input> boxShadow to selected glowing (active, middle, aquamarine)', () => {
    const dir = des[3].injector.get(GlowingDirective) as GlowingDirective;
    const input = des[3].nativeElement as HTMLInputElement;
    expect(input.style.boxShadow).toBe(testGlowing.boxShadow.selected);
    expect(input.style.boxShadow).toBe(dir.glowingStyle.boxShadow, 'initial boxShadow');

    input.value = GlowingColorEnum.red.toString();
    input.dispatchEvent(newEvent('input'));
    fixture.detectChanges();

    expect(input.style.boxShadow).toBe(testGlowing.boxShadow.default);
    expect(input.style.boxShadow).toBe(dir.glowingStyle.boxShadow, 'changed boxShadow');
  });

  it('should color 3nd <div> boxShadow with inactive glowing from boolean', () => {
    const dir = des[2].injector.get(GlowingDirective) as GlowingDirective;
    const boxShadow = des[2].nativeElement.style.boxShadow;
    expect(boxShadow).toBe(testGlowing.boxShadow.inactive);
    expect(boxShadow).toBe(dir.glowingStyle.boxShadow);
  });

  it('can inject `GlowingDirective` in 1st <div>', () => {
    const dir = des[0].injector.get(GlowingDirective, null);
    expect(dir).toBeTruthy();
  });

  it('cannot inject `GlowingDirective` in 3rd <div>', () => {
    const dir = bareDiv.injector.get(GlowingDirective, null);
    expect(dir).toBe(null);
  });

  it('should have `GlowingDirective` in 1st <div> providerTokens', () => {
    expect(des[0].providerTokens).toContain(GlowingDirective);
  });

  it('should not have `GlowingDirective` in 3rd <div> providerTokens', () => {
    expect(bareDiv.providerTokens).not.toContain(GlowingDirective);
  });

});
