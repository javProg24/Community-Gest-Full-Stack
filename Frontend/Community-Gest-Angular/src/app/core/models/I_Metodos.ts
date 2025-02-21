import { Observable } from "rxjs";

export interface I_Metodos{
    getService<T>(instancia:string):Observable<T[]>;
    addService<T>(instancia:string,Entidad:any):Observable<T>;
    deleteService<T>(instancia:string, id:number):Observable<T>;
    updateService<T>(instancia: string, id: number,Entidad:any):Observable<T>;
    desactiveService<T>(instancia:string,id:number):Observable<T>
    activeService<T>(instancia:string,id:number):Observable<T>
}

// export enum Interfaces{
//     Instalacion="Instalacion",
//     Herramienta="Herramienta",
//     Usuario="Usuario",
//     Reserva_Instalacion="Reserva_Instalacion",
//     Reserva_Herramienta="Reserva_Herramienta",
//     Reporte="Reporte"
// }

/**
 * The function `toStringEnum` takes an enum value as input and returns its string representation.
 * @param {Entidad} entidad - The parameter `value` is of type `Entidades`, which is likely an enum
 * type in TypeScript. The `toStringEnum` function takes a value of this enum type and returns its
 * string representation.
 */
//Entidad[value] - accedemos al nombre de la enumeracion dependiendo del value
export const toStringEnum=(entidad:Entidad):string=>Entidad[entidad];
//este enum es por defecto de tipo numerico
export enum Entidad{
    Instalacion,//0
    Herramienta,//1
    Usuario,//2
    Reserva_Instalacion,//3
    Reserva_Herramienta,//4
    Reporte,//5
    Reserva,//6
    Historial//7
}
