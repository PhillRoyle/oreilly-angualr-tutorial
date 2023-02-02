import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComponentStatefulButtonComponent } from './single-component-stateful-button.component';

describe('SingleComponentStatefulButtonComponent', () => {
  let component: SingleComponentStatefulButtonComponent;
  let fixture: ComponentFixture<SingleComponentStatefulButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleComponentStatefulButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleComponentStatefulButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
