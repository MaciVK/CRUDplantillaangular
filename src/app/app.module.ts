import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { PlantillaService } from './services/Plantilla.service';
import { DetallesEmpledoComponent } from './components/detalles-empledo/detalles-empledo.component';
import { FormularioAumentoComponent } from './components/formulario-aumento/formulario-aumento.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetallesFuncionesComponent } from './components/detalles-funciones/detalles-funciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetallesEmpledoComponent,
    FormularioAumentoComponent,
    NavbarComponent,
    DetallesFuncionesComponent,
  ],
  imports: [BrowserModule, NgbModule, routing, HttpClientModule],
  providers: [appRoutingProvider, PlantillaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
