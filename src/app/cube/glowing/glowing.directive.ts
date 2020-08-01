import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { GlowingModel, LightColorEnum, LightLevelEnum } from './glowing.model';

@Directive({
  selector: '[appGlowing]'
})
export class GlowingDirective implements OnChanges {
  private active: boolean;
  private defaultGlowing = new GlowingModel();

  @Input('appGlowing') set glowingActive(active: boolean | string) {
    this.active = this.defineActive(active);
  }
  @Input() private glowingLevel: LightLevelEnum = this.defaultGlowing.defaultLevel;
  @Input() private glowingColor: LightColorEnum = this.defaultGlowing.defaultColor;


  constructor(private el: ElementRef) {}

  ngOnChanges() {
    const glowingStyle = this.glowingStyle;
    Object.keys(glowingStyle)
      .forEach(key => this.el.nativeElement.style[key] = glowingStyle[key]);
  }

  get glowingStyle(): {[key: string]: string} {
    const boxShadow = this.active
      ? `${LightColorEnum[this.glowingColor]} 0px 0px ${5 * (this.glowingLevel + 1)}px`
      : '';
    return {boxShadow};
  }

  private defineActive(active: boolean | string): boolean {
    switch (typeof active) {
      case 'string':
        return active === '' ? this.defaultGlowing.defaultActive : (active === 'true');
      case 'boolean':
        return active;
    }
  }

}
