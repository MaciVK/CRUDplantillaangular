import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAumentoComponent } from './formulario-aumento.component';

describe('FormularioAumentoComponent', () => {
  let component: FormularioAumentoComponent;
  let fixture: ComponentFixture<FormularioAumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
