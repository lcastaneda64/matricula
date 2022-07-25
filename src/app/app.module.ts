import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { CrudComponent } from './pages/crud/crud.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { RegistrarUsuarioComponent } from './pages/crud/registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './pages/crud/actualizar-usuario/actualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MatriculaComponent,
    DocumentacionComponent,
    CrudComponent,
    HomeComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
