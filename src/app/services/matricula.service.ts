import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatriculaModel } from '../models/Matricula.model';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  url: string = `${environment.baseUrl}/matricula`;
  matricula: string = environment.matricula;

  constructor(private readonly http: HttpClient) { }

  postMatricula(matricula: MatriculaModel){
    
    return this.http.post(`${this.url}`, matricula, {params: {matricula: this.matricula}});
  }
}
