import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from '../offre';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private baseURL='http://localhost:8080/api/test/listoffre';
  private baseURL2 = "http://localhost:8080/api/test/creeroffre";
  constructor(private http: HttpClient) { }

  getOffre(): Observable<Offre[]>{
    return this.http.get<Offre[]>(`${this.baseURL}`);
  }

  createOffre(offre: Offre): Observable<Object>{
    return this.http.post(`${this.baseURL}`, offre);
  }

  deleteOffre(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL2}/${id}`);
  }


  goToUserListPostuler(id: number, offre: Offre): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, offre);
  }

  
}
