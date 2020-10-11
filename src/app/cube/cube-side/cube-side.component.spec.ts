import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CubeSideComponent } from './cube-side.component';

describe('CubeSideComponent', () => {
  let component: CubeSideComponent;
  let fixture: ComponentFixture<CubeSideComponent>;

  beforeEach(waitForAsync(() => {
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
});
