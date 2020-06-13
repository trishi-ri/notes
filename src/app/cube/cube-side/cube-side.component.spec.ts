import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeSideComponent } from './cube-side.component';
import { CubeSide } from './cube-side.model';
import { LightColorEnum, LightLevelEnum } from './glowing.model';

describe('CubeSideComponent', () => {
  let component: CubeSideComponent;
  let fixture: ComponentFixture<CubeSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CubeSideComponent]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(CubeSideComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('glowing', () => {

    beforeEach(() => {
      component.side = new CubeSide({
        glowing: {
          active: true,
          lightLevel: LightLevelEnum.low,
          lightColor: LightColorEnum.red,
        }
      });
      fixture.detectChanges();
    });

    it('should set class glowing', () => {
      const hostElement = fixture.nativeElement as HTMLElement;
      expect(hostElement.classList.value).toBe('glowing glowing--red-low');
      component.side.glowing.active = false;
      fixture.detectChanges();
      expect(hostElement.classList.value).toBe('');
    });

    it('should have glowing description', () => {
      const hostElement = fixture.nativeElement as HTMLElement;
      expect(hostElement.textContent.trim()).toBe('glowing: active lightLevel = low lightColor = red');
      component.side.glowing.active = false;
      fixture.detectChanges();
      expect(hostElement.textContent.trim()).toBe('glowing: inactive');
    });
  });


});
