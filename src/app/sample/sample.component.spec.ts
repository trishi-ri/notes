import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SampleComponent);
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
