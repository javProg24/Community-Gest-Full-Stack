import { Herramienta } from "./Herramienta";
import { Usuario } from "./Usuario";

export interface Reserva_Herramienta{
    id?: number,
    usuario_ID: number,
    herramienta_ID:number,
    dia:string,
    fecha:string,
    horaInicio:string,
    horaFin:string,
    disponibilidad:string
    herramienta?:Herramienta|null
    usuario?:Usuario|null
}
export class Reserva_Herramienta_Tabla{
    id?=0;
    usuario= "";
    herramienta="";
    dia="";
    fecha=""
    horaInicio="";
    horaFin=""
    disponibilidad=""
}
