import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActualizarClientesComponent } from './clientes/actualizar-clientes/actualizar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoClientesComponent,
    CrearClienteComponent,
    ActualizarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
