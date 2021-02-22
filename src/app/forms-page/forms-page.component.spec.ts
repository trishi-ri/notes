import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPageComponent } from './forms-page.component';
import { MatGridListModule } from '@angular/material/grid-list';

describe('FormsPageComponent', () => {
  let component: FormsPageComponent;
  let fixture: ComponentFixture<FormsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsPageComponent ],
      imports: [ MatGridListModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
