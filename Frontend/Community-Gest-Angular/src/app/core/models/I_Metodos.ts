import { Observable } from "rxjs";

export interface I_Metodos{
    getService<T>(instancia:string):Observable<T[]>;
    addService<T>(instancia:string,Entidad:any):Observable<T>;
    deleteService<T>(instancia:string, id:number):Observable<T>;
    updateService<T>(instancia: string, id: number,Entidad:any):Observable<T>;
}