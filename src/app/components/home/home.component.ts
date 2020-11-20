import { Component, OnInit } from '@angular/core';
import { Plantilla } from 'src/app/models/Plantilla';
import { PlantillaService } from './../../services/Plantilla.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public plantilla: Array<Plantilla>;

  constructor(private _service: PlantillaService) {
    this.plantilla = [];
  }

  getPlantilla() {
    this._service.getPlantilla().subscribe(
      (respuesta) => {
        this.plantilla = respuesta;
        console.log(this.plantilla);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.getPlantilla();
  }
}
