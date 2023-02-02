import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoicePageComponent } from './multiple-choice-page.component';

describe('MultipleChoicePageComponent', () => {
  let component: MultipleChoicePageComponent;
  let fixture: ComponentFixture<MultipleChoicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChoicePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleChoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
