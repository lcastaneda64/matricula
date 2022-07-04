import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './pages/crud/crud.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { HomeComponent } from './pages/home/home.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "matricula", component: MatriculaComponent},
  {path: "api", component: DocumentacionComponent},
  {path: "crud", component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
