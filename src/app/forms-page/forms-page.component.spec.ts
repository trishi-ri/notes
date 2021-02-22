import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsPageComponent } from './forms-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScoreRatingModule } from './score-rating/score-rating.module';

describe('FormsPageComponent', () => {
  let component: FormsPageComponent;
  let fixture: ComponentFixture<FormsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsPageComponent ],
      imports: [ MatGridListModule, ScoreRatingModule, BrowserAnimationsModule ]
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
