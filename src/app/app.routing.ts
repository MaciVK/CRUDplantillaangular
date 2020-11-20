import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesEmpledoComponent } from './components/detalles-empledo/detalles-empledo.component';
import { DetallesFuncionesComponent } from './components/detalles-funciones/detalles-funciones.component';
import { FormularioAumentoComponent } from './components/formulario-aumento/formulario-aumento.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  //Aqui van los path
  { path: '', component: HomeComponent },
  { path: 'detalles/:idempleado', component: DetallesEmpledoComponent },
  { path: 'funciones/:funcion', component: DetallesFuncionesComponent },
  {
    path: 'aumentar',
    component: FormularioAumentoComponent,
  },
];
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
