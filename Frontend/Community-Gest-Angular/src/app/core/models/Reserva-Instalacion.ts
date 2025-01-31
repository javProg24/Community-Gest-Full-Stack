import { Instalacion } from "./Instalacion";
import { Usuario } from "./Usuario";

export interface Reserva_Instalacion{
    id?: number;
    usuario_ID:number,
    usuario?:Usuario|null
    instalacion_ID:number,
    instalacion?:Instalacion|null
    fecha:string,
    disponibilidad:string
}
export class Reserva_Instalacion_Tabla{
    id?=0;
    usuario="";
    instalacion="";
    dia=""
    horaInicio=""
    horaFin=""
    fecha="";
    disponibilidad=""
}