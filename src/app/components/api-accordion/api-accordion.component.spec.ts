import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAccordionComponent } from './api-accordion.component';

describe('ApiAccordionComponent', () => {
  let component: ApiAccordionComponent;
  let fixture: ComponentFixture<ApiAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
