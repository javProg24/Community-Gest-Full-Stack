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