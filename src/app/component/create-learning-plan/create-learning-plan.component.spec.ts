import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLearningPlanComponent } from './create-learning-plan.component';

describe('CreateLearningPlanComponent', () => {
  let component: CreateLearningPlanComponent;
  let fixture: ComponentFixture<CreateLearningPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLearningPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLearningPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
