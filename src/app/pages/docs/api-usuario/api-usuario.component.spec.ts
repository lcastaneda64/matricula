import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUsuarioComponent } from './api-usuario.component';

describe('ApiUsuarioComponent', () => {
  let component: ApiUsuarioComponent;
  let fixture: ComponentFixture<ApiUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
