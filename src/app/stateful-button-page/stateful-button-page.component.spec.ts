import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulButtonPageComponent } from './stateful-button-page.component';

describe('StatefulButtonPageComponent', () => {
  let component: StatefulButtonPageComponent;
  let fixture: ComponentFixture<StatefulButtonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatefulButtonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatefulButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
