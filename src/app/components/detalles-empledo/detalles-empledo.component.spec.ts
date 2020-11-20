import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEmpledoComponent } from './detalles-empledo.component';

describe('DetallesEmpledoComponent', () => {
  let component: DetallesEmpledoComponent;
  let fixture: ComponentFixture<DetallesEmpledoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesEmpledoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesEmpledoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
