import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Global } from './Global';
@Injectable()
export class PlantillaService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlPlantilla;
  }
  getPlantilla(): Observable<any> {
    var request = 'api/plantilla';
    return this._http.get(this.url + request);
  }
  getFunciones(): Observable<any> {
    var request = 'api/plantilla/funciones';
    return this._http.get(this.url + request);
  }
  getEmpleadosFuncion(funcion): Observable<any> {
    var request = 'api/Plantilla/PlantillaFuncion/' + funcion;
    return this._http.get(this.url + request);
  }
  getDetallesEmpleado(idempleado): Observable<any> {
    var request = 'api/plantilla/' + idempleado;
    return this._http.get(this.url + request);
  }
}
