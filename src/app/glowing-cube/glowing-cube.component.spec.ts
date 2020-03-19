import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingCubeComponent } from './glowing-cube.component';

describe('GlowingCubeComponent', () => {
  let component: GlowingCubeComponent;
  let fixture: ComponentFixture<GlowingCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowingCubeComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(GlowingCubeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
