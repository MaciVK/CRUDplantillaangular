import { Component, OnInit } from '@angular/core';
import { PlantillaService } from 'src/app/services/Plantilla.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public funciones: Array<string>;

  constructor(private _service: PlantillaService) {}

  buscarFunciones() {
    this._service.getFunciones().subscribe(
      (response) => {
        this.funciones = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.buscarFunciones();
  }
}
