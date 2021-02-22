import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearningPlansComponent } from './my-learning-plans.component';

describe('MyLearningPlansComponent', () => {
  let component: MyLearningPlansComponent;
  let fixture: ComponentFixture<MyLearningPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLearningPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLearningPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
