import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesFuncionesComponent } from './detalles-funciones.component';

describe('DetallesFuncionesComponent', () => {
  let component: DetallesFuncionesComponent;
  let fixture: ComponentFixture<DetallesFuncionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesFuncionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
