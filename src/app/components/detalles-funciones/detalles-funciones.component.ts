import { Component, OnInit } from '@angular/core';
import { Plantilla } from 'src/app/models/Plantilla';
import { PlantillaService } from 'src/app/services/Plantilla.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles-funciones',
  templateUrl: './detalles-funciones.component.html',
  styleUrls: ['./detalles-funciones.component.css'],
})
export class DetallesFuncionesComponent implements OnInit {
  public empleados: Array<Plantilla>;

  constructor(
    private _service: PlantillaService,
    private _activeroute: ActivatedRoute
  ) {}

  buscarEmpleadosFuncion(funcion) {
    this._service.getEmpleadosFuncion(funcion).subscribe(
      (respuesta) => {
        this.empleados = respuesta;
        console.log(this.empleados);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeroute.params.subscribe(
      (params: Params) => {
        this.buscarEmpleadosFuncion(params.funcion);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
