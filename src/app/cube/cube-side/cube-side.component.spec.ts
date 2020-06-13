import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeSideComponent } from './cube-side.component';

describe('CubeSideComponent', () => {
  let component: CubeSideComponent;
  let fixture: ComponentFixture<CubeSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
