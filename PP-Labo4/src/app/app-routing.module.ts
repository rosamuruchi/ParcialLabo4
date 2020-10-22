import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./components/presentacion/paginas/inicio/inicio.component";
import { ListadoComponent } from "./components/logicos/paginas/listado/listado.component";
import { DetalleComponent } from "./components/logicos/paginas/detalle/detalle.component";
import { NotFoundComponent } from "./components/presentacion/paginas/not-found/not-found.component";
import { MovimientosComponent } from "./components/logicos/paginas/movimientos/movimientos.component"

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'detalle/:pokemon',
    component: DetalleComponent,
  },
  {
    path: 'movimientos/:pokemon',
    component: MovimientosComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
