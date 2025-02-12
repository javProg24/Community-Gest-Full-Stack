import { Observable } from "rxjs";

export interface I_Metodos{
    getService<T>(instancia:string):Observable<T[]>;
    addService<T>(instancia:string,Entidad:any):Observable<T>;
    deleteService<T>(instancia:string, id:number):Observable<T>;
    updateService<T>(instancia: string, id: number,Entidad:any):Observable<T>;
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
 * @param {Entidad} value - The parameter `value` is of type `Entidades`, which is likely an enum
 * type in TypeScript. The `toStringEnum` function takes a value of this enum type and returns its
 * string representation.
 */
export const toStringEnum=(value:Entidad)=>Entidad[value];
//este enum es por defecto de tipo numerico
export enum Entidad{
    Instalacion,//1
    Herramienta,//2
    Usuario,//3
    Reserva_Instalacion,//4
    Reserva_Herramienta,//5
    Reporte,//6
    Reserva,//7
    Historial//8
}