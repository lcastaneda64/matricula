import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/Response.model';
import { UsuarioModel } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = `${environment.baseUrl}/usuario`;
  matricula: string = environment.matricula;

  constructor(private readonly http: HttpClient) { }

  getUsuarios(){
    return lastValueFrom<ResponseModel>(this.http.get<ResponseModel>(`${this.url}`, {params: {matricula: this.matricula}}));
  }

  getUsuario(idUsuario: string){
    return lastValueFrom(this.http.get(`${this.url}/${idUsuario}`, {params: {matricula: this.matricula}}))
  }

  postUsuario(usuario: UsuarioModel) {
    return lastValueFrom(this.http.post(`${this.url}`, usuario, {params: {matricula: this.matricula}}));
  }

  putUsuario() {
  }

  deleteUsuario(){
  }
}
