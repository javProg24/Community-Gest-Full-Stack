import { Observable } from "rxjs";

export interface Metodos{
    getService<T>(instancia:string):Observable<T[]>;
    addService<T>(instancia:string,Entidad:unknown):Observable<T>;
    deleteService<T>(instancia:string, id:number):Observable<T>;
    updateService<T>(instancia: string, id: number,Entidad:unknown):Observable<T>;
    desactiveService<T>(instancia:string,id:number):Observable<T>
    activeService<T>(instancia:string,id:number):Observable<T>
}
/*export function obtenerDisponibilidad(disponibilidad: string):string{
    return Reserva[disponibilidad]
}*/
const tipoReserva:Record<string,string>={
    C:"Cancelado",
    R:"Reservado",
    F:"Finalizado" 
}
export const obtenerDisponibilidad=(tipo:string):string=>tipoReserva[tipo];