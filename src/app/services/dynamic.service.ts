import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  constructor(private readonly http: HttpClient) { }
  
  getData(url: string, query: any) {
    return this.http.get(`${url}`, {params: query});
  }

  postData(url: string, body: any, query: any) {
    return this.http.post(`${url}`, body, {params: query});
  }

  putData(url: string, body: any, query: any) {
    return this.http.put(`${url}`, body, {params: query});
  }

  deleteData(url: string, query: any) {
    return this.http.delete(`${url}`, {params: query});
  }
}
