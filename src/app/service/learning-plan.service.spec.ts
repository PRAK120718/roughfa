import { TestBed } from '@angular/core/testing';

import { LearningPlanService } from './learning-plan.service';

describe('LearningPlanService', () => {
  let service: LearningPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
