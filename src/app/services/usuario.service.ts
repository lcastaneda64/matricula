import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = `${environment.baseUrl}/usuarios`;
  matricula: string = environment.matricula;

  constructor(private readonly http: HttpClient) { }

  getUsuarios(){
    this.http.get(`${this.url}`);
  }
}
