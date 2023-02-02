import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulButtonComponent } from './stateful-button.component';

describe('StatefulButtonComponent', () => {
  let component: StatefulButtonComponent;
  let fixture: ComponentFixture<StatefulButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatefulButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatefulButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
