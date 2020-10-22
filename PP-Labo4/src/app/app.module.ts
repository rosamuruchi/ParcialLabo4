import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

//HTTP
import { HttpClientModule } from "@angular/common/http";

//Mis componentes
import { LabelComponent } from './components/presentacion/atoms/label/label.component';
import { TitleComponent } from './components/presentacion/atoms/title/title.component';
import { CardComponent } from './components/presentacion/card/card.component';
import { ToolbarComponent } from './components/presentacion/toolbar/toolbar.component';
import { InicioComponent } from './components/presentacion/paginas/inicio/inicio.component';
import { NotFoundComponent } from './components/presentacion/paginas/not-found/not-found.component';
import { SpinnerComponent } from './components/presentacion/spinner/spinner.component';
import { ListadoComponent } from './components/logicos/paginas/listado/listado.component';
import { DetalleComponent } from './components/logicos/paginas/detalle/detalle.component';
import { MovimientosComponent } from './components/logicos/paginas/movimientos/movimientos.component';


@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    TitleComponent,
    CardComponent,
    ToolbarComponent,
    InicioComponent,
    NotFoundComponent,
    SpinnerComponent,
    ListadoComponent,
    DetalleComponent,
    MovimientosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
