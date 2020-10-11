import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CubeComponent } from './cube.component';
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

});
