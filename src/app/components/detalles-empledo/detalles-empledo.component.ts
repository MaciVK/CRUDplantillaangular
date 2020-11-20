import { Component, OnInit } from '@angular/core';
import { Plantilla } from 'src/app/models/Plantilla';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlantillaService } from 'src/app/services/Plantilla.service';

@Component({
  selector: 'app-detalles-empledo',
  templateUrl: './detalles-empledo.component.html',
  styleUrls: ['./detalles-empledo.component.css'],
})
export class DetallesEmpledoComponent implements OnInit {
  public empleado: Plantilla;
  constructor(
    private _service: PlantillaService,
    private _activeRoute: ActivatedRoute
  ) {}
  buscarDetallesEmpleado(idempleado) {
    this._service.getDetallesEmpleado(idempleado).subscribe(
      (respuesta) => {
        this.empleado = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.buscarDetallesEmpleado(params.idempleado);
    });
  }
}
