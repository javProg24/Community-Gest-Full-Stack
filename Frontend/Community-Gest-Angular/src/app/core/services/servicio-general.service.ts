import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { I_Metodos } from '../models/I_Metodos';

@Injectable({
  providedIn: 'root'
})
export class GeneralService implements I_Metodos{
  private url = 'https://localhost:7040'
  constructor(private http:HttpClient) { }
  getService<T>(instancia: string): Observable<T[]> {
    const APIurl=`${this.url}/${instancia}`;
    return this.http.get<T[]>(APIurl);
  }
  addService<T>(instancia: string, Entidad: any): Observable<T> {
    const APIurl=`${this.url}/${instancia}`;
    return this.http.post<T>(APIurl,Entidad);
  }
  deleteService<T>(instancia: string, id: number): Observable<T> {
    const APIurl=`${this.url}/${instancia}/${id}`;
    return this.http.delete<T>(APIurl);
  }
  updateService<T>(instancia: string, id: number, Entidad: any): Observable<T> {
    const APIurl=`${this.url}/${instancia}/${id}`;
    return this.http.put<T>(APIurl,Entidad)
  }
  getIdService<T>(instancia: string, id: number): Observable<T[]> {
    const APIurl=`${this.url}/${instancia}/${id}`;
    return this.http.get<T[]>(APIurl)
  }
}
