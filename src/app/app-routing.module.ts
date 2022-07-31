import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './pages/crud/crud.component';
import { ApiEmpresaComponent } from './pages/docs/api-empresa/api-empresa.component';
import { ApiUsuarioComponent } from './pages/docs/api-usuario/api-usuario.component';
import { EmpresaCrudComponent } from './pages/empresa-crud/empresa-crud.component';
import { HomeComponent } from './pages/home/home.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "matricula", component: MatriculaComponent},
  {path: "api-usuario", component: ApiUsuarioComponent},
  {path: "api-empresa", component: ApiEmpresaComponent},
  {path: "crud", component: CrudComponent},
  {path: "empresa-crud", component: EmpresaCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
