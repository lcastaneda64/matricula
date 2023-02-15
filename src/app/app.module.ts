import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { CrudComponent } from './pages/crud/crud.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ApiUsuarioComponent } from './pages/docs/api-usuario/api-usuario.component';
import { ApiEmpresaComponent } from './pages/docs/api-empresa/api-empresa.component';
import { EmpresaCrudComponent } from './pages/empresa-crud/empresa-crud.component';
import { ApiAccordionComponent } from './components/api-accordion/api-accordion.component';
import { CrudDetailComponent } from './pages/crud/crud-detail/crud-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MatriculaComponent,
    CrudComponent,
    HomeComponent,
    ApiUsuarioComponent,
    ApiEmpresaComponent,
    EmpresaCrudComponent,
    ApiAccordionComponent,
    CrudDetailComponent
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
