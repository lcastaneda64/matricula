import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEmpresaComponent } from './api-empresa.component';

describe('ApiEmpresaComponent', () => {
  let component: ApiEmpresaComponent;
  let fixture: ComponentFixture<ApiEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
