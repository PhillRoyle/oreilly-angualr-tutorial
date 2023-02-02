import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamsExampleComponent } from './query-params-example.component';

describe('QueryParamsExampleComponent', () => {
  let component: QueryParamsExampleComponent;
  let fixture: ComponentFixture<QueryParamsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryParamsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryParamsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
