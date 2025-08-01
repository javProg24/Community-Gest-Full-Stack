import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Metodos } from '@core/models/Metodos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService implements Metodos{
  private url = 'https://localhost:7179/api'
  constructor(private http:HttpClient) { }
  configUpdateService<T>(instancia: string, tipo: string, id: number): Observable<T> {
    return this.http.put<T>(`${this.url}/${instancia}/${tipo}/${id}`,{})
  }
  getService<T>(instancia: string): Observable<T[]> {
    const APIurl=`${this.url}/${instancia}`;
    return this.http.get<T[]>(APIurl);
  }
  addService<T>(instancia: string, Entidad: unknown): Observable<T> {
    const APIurl=`${this.url}/${instancia}`;
    return this.http.post<T>(APIurl,Entidad);
  }
  deleteService<T>(instancia: string, id: number): Observable<T> {
    const APIurl=`${this.url}/${instancia}/${id}`;
    return this.http.delete<T>(APIurl);
  }
  updateService<T>(instancia: string, id: number, Entidad: unknown): Observable<T> {
    const APIurl=`${this.url}/${instancia}/${id}`;
    return this.http.put<T>(APIurl,Entidad)
  }
  getIdService<T>(instancia: string, id: number): Observable<T[]> {
    const APIurl=`${this.url}/${instancia}/${id}`;
    return this.http.get<T[]>(APIurl)
  }
}
