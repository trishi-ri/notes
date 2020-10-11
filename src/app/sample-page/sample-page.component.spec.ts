import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SamplePageComponent } from './sample-page.component';

describe('SamplePageComponent', () => {
  let component: SamplePageComponent;
  let fixture: ComponentFixture<SamplePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePageComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SamplePageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'notes'`, () => {
    expect(component.title).toEqual('notes');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('notes app is running!');
  });
});
