import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateCountyButtonComponent } from './navigate-county-button.component';

describe('NavigateCountyButtonComponent', () => {
  let component: NavigateCountyButtonComponent;
  let fixture: ComponentFixture<NavigateCountyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateCountyButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateCountyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
