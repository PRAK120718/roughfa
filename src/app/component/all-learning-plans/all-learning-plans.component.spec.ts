import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLearningPlansComponent } from './all-learning-plans.component';

describe('AllLearningPlansComponent', () => {
  let component: AllLearningPlansComponent;
  let fixture: ComponentFixture<AllLearningPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLearningPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLearningPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
