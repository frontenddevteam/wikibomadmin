import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEditFormComponent } from './quiz-edit-form.component';

describe('QuizEditFormComponent', () => {
  let component: QuizEditFormComponent;
  let fixture: ComponentFixture<QuizEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
