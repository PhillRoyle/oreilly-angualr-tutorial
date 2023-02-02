import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsMessageComponentComponent } from './congrats-message-component.component';

describe('CongratsMessageComponentComponent', () => {
  let component: CongratsMessageComponentComponent;
  let fixture: ComponentFixture<CongratsMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratsMessageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongratsMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
