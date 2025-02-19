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
    hora_Inicio="";
    hora_Fin=""
    disponibilidad=""
}
export const Reserva_Herramienta_Response={
    id: 'id',
    usuario: 'usuario',
    herramienta:'herramienta',
    dia:'dia',
    fecha:'fecha',
    hora_Inicio:'hora_Inicio',
    hora_Fin:'hora_Fin',
    disponibilidad:'disponibilidad'
}as const;