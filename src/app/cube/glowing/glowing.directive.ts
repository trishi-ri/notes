import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { GlowingLevelEnum, GlowingLevelModel } from './glowing-parameters/level/glowing-level.model';
import { GlowingColorEnum, GlowingColorModel } from './glowing-parameters/color/glowing-color.model';
import { GlowingActiveModel } from './glowing-parameters/active/glowing-active.model';

@Directive({
  selector: '[appGlowing]'
})
export class GlowingDirective implements OnChanges {
  private active: boolean;

  @Input('appGlowing') set glowingActive(active: boolean | string) {
    this.active = this.defineActive(active);
  }
  @Input() private glowingLevel: GlowingLevelEnum = new GlowingLevelModel().value;
  @Input() private glowingColor: GlowingColorEnum = new GlowingColorModel().value;


  constructor(private el: ElementRef) {}

  ngOnChanges() {
    const glowingStyle = this.glowingStyle;
    Object.keys(glowingStyle)
      .forEach(key => this.el.nativeElement.style[key] = glowingStyle[key]);
  }

  get glowingStyle(): {[key: string]: string} {
    const boxShadow = this.active
      ? `${GlowingColorEnum[this.glowingColor]} 0px 0px ${5 * (this.glowingLevel + 1)}px`
      : '';
    return {boxShadow};
  }

  private defineActive(active: boolean | string): boolean {
    switch (typeof active) {
      case 'string':
        return active === '' ? new GlowingActiveModel().value : (active === 'true');
      case 'boolean':
        return active;
    }
  }

}
